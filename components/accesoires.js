import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';

const Accesoires = (props) => {
  const [article, setArticle] = useState({});

  const getArticleData = async () => {
    try {
      let url;
      if (Platform.OS === 'android') {
        // Gebruik het juiste IP en poortnummer voor Android
        url = "http://127.0.0.1:32788/api/accesoires/";
      } else {
        url = "http://sport.ddev.site/api/accesoires/";
      }
      url += props.articleId;
      const response = await fetch(url, {
        method: "GET",
      });
      const json = await response.json();
      if (Platform.OS === 'android') {
        json.headerImg = json.headerImg.replace("sport.ddev.site", "127.0.0.1:32788");
      }
      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticleData();
  }, [props.articleId]); // Voeg props.articleId toe als dependency

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: article.headerImg }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.body}>{article.fullText}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  wrapper: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24,
  },
});

export default Accesoires;
