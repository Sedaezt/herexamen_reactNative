// sport
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component
import SportItem from '../components/SportItem';
import { FlatList } from 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const SportScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]); // Change state variable name

  const getSportArticles = async () => {
    try {
      let url;
      if (Platform.OS == 'android') {
        url = "http://10.0.2.2:32788/api/accesoires";
      } else {
        url = "http://sport.ddev.site/api/accesoires";
      }

      const response = await fetch(url, {
        "method": "GET",
      });
      const json = await response.json();
      //console.log('API Response:', json);  // Log the API response
      console.log("Items:", json.items.title)
      setArticles(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSportArticles();
  }, []);

  const ScrollViewWithGesture = gestureHandlerRootHOC(ScrollView);

  return gestureHandlerRootHOC(
    <ScrollViewWithGesture style={styles.container}>
      <View style={styles.holder}>
        <Text style={styles.welcomeText}>All</Text>
        <Text style={styles.goodSportText}> Sport Items</Text>
      </View>
      <View style={styles.imageContainer2}>
        {/* <Image source={require('../assets/Frontpage/assortiment.jpg')} style={styles.fullImage} /> */}
      </View>

      <FlatList
        style={styles.assortimenten}
        data={articles}
        keyExtractor={item => item.id} // Use id as the key for the FlatList
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            // ddev describe om port number te weten te komen
            item.sportImage = item.sportImage.replace('drankwebshop.ddev.site', '10.0.2.2:32772');
          }
          //console.log(item.bannerImg);
          return <SportItem
            id={item.id}
            title={item.title}
            info={item.introduction}
            price={item.price}
            sportImage={item.sportImage}
          />
        }}
      />

      {/* Use the Footer component with the navigation prop */}
      <Footer navigation={navigation} />
    </ScrollViewWithGesture>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECC1BD', // Background color
    marginHorizontal: 0,
    flexDirection: 'column',
    marginBottom: 0,
    width: "100%",
  },
  holder: {
    flex: 1,
    alignItems: "center",
    marginVertical: 56, // Add margin between images and other content
  },
  welcomeText: {
    color: '#FFFFFF', // Text color (white)
    fontSize: 24, // Font size
  },
  goodSportText: {
    color: '#E52529', 
    fontSize: 24, // Font size
    fontWeight: 'bold', // Font weight
    textAlign: "center"
  },
  imageContainer: {
    flexDirection: 'row', // Arrange children horizontally
    marginTop: 0, // Adjust the spacing as needed
  },
  imageContainer2: {
    marginTop: 32,
  },
  assortimenten: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 32,
  },
  euro: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

});
// sport
export default SportScreen;
