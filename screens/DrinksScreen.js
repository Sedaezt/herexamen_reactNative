import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component
import DrinksItem from '../components/DrinksItem';
import { FlatList } from 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const DrinksScreen = ({navigation}) => {
  const [articles, setArticles] = useState([]); // Change state variable name

  const getDrinksArticle = async () => {
    try {
      let url;
        if (Platform.OS == 'android') {
          url = "http://10.0.2.2:32772/api/drinks";
        } else {
          url = "http://drankwebshop.ddev.site/api/drinks";
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
    getDrinksArticle();
  }, []);

  const ScrollViewWithGesture = gestureHandlerRootHOC(ScrollView);

    return gestureHandlerRootHOC (
      <ScrollViewWithGesture style={styles.container}>
        <View style={styles.holder}>
          <Text style={styles.welcomeText}>All  </Text>
          <Text style={styles.goodDrinksText}> Drinks</Text>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/Frontpage/assortiment.jpg')} style={styles.fullImage} />
        </View>
  
      
        <FlatList 
        style={styles.assortimenten}
         
          data={articles.id}
          keyExtractor={item => item.id}//gebruik id als key voor de flatlist
          renderItem={({ item }) => {
            if (Platform.OS == 'android') {
              //ddev describe om port number te weten te komen
              item.drinkImage = item.drinkImage.replace('drankwebshop.ddev.site', '10.0.2.2:32772');
            }
            //console.log(item.bannerImg);
            return <DrinksItem
            id={item.id}
            title={item.title}
            info={item.introduction}
            price={item.price}
            drinkImage ={item.drinkImage}
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
        backgroundColor: '#ECC1BD', // Rood
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
        color: '#FFFFFF', // Tekstkleur (wit)
        fontSize: 24, // Optioneel: pas de grootte van de tekst aan
      },
      goodDrinksText: {
        color: '#E52529', 
        fontSize: 24, // Optioneel: pas de grootte van de tekst aan
        fontWeight: 'bold', // Optioneel: pas de dikte van de tekst aan
        textAlign: "center"
      },
      imageContainer: {
        flexDirection: 'row', // Arrange children horizontally
        marginTop: 0, // Adjust the spacing as needed
      },
      imageContainer2: {
        marginTop: 32,
      },
      fullImage: {
        width: '100%', // Take up 100% width
        height: 230,   // Fixed height
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

export default DrinksScreen;