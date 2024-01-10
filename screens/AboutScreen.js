// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

const AboutScreen = ({navigation}) => {
  const goToDrinks = () => {
    // Navigate to the "Drinks" screen
    navigation.navigate('Drinks');
  };

  const goToAbout = () => {
    // Navigate to the "About" screen
    navigation.navigate('About');
  };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.holder}>
          <Text style={styles.welcomeText}>About  </Text>
          <Text style={styles.goodDrinksText}> The Very Good Drinks.</Text>
        </View>
          {/* Add two images side by side */}
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/About/passion_led_us_here.jpg')} style={styles.fullImage} />
        </View>
        <View style={styles.holders}>
          <View style={styles.holder2}>
            <Text style={styles.goodDrinksText}> Welkom</Text>
          </View>
          <Text style={styles.pText}> Welkom in THE VERY GOOD DRINKS waar drank koning is. We zijn meer dan enkel een drank bedrijf; we zijn een hippe leuke en lekkere comunity met als missie het brengen van de lekkerste dranken.</Text>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/About/ons_vereniging.jpg')} style={styles.fullImage} />
        </View>
        <View style={styles.holders}>
          <View style={styles.holder2}>
            <Text style={styles.goodDrinksText}> Ons verhaal</Text>
          </View>
          <Text style={styles.pText}>We zijn ontstaan uit het brein van onze oprichter Yann Tagakou. 
          {'\n'}{'\n'}Opgericht in 2024, zijn we begonnen aan een reis om iedereen aan drank te voorzien. Sindsdien zijn we uitgegroeid tot een kleine startup die het halen wilt.</Text>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/About/ons_verhaal.jpg')} style={styles.fullImage} />
        </View>
        <View style={styles.holders}>
          <View style={styles.holder2}>
            <Text style={styles.welcomeText}> What we are all</Text>
            <Text style={styles.goodDrinksText}> About</Text>
          </View>
          <Text style={styles.pText}>Eerst en vooral wij zijn de nummer 1 website in drankverkoop. Maar we zijn meer dan dat. Ondek dit allemaal.</Text>
          <TouchableOpacity style={styles.button} onPress={goToDrinks}>
            <Text style={styles.buttonText}>Get to know us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/Frontpage/About_frontpage.jpg')} style={styles.fullImage} />
        </View>
        
        {/* Use the Footer component with the navigation prop */}
        <Footer navigation={navigation} />
      </ScrollView>
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
      holders: {
        flex: 1,
        alignItems: "center",
        marginVertical: 16, // Add margin between images and other content
      },

      holder: {
        flex: 1,
        alignItems: "center",
        marginVertical: 56, // Add margin between images and other content
      },

      holder2: {
        flex: 1,
        alignItems: "center",
        marginVertical: 16,
      },

      button: {
        backgroundColor: '#FF0000', // Red color
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        marginTop: 10, // Add space between the button and other content
        alignItems: 'center',
      },

      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },

      welcomeText: {
        color: '#FFFFFF', // Tekstkleur (wit)
        fontSize: 24, // Optioneel: pas de grootte van de tekst aan
      },
      goodDrinksText: {
        color: '#E52529', // Tekstkleur (wit)
        fontSize: 24, // Optioneel: pas de grootte van de tekst aan
        fontWeight: 'bold', // Optioneel: pas de dikte van de tekst aan
      },
      imageContainer: {
        flexDirection: 'row', // Arrange children horizontally
        marginTop: 0, // Adjust the spacing as needed
      },
      image: {
        flex: 1, // Take up equal space in the row
        width: null, // Set the width of your images
        height: null, // Set the height of your images
        aspectRatio: 1, // Maintain the aspect ratio of the images
        marginHorizontal: 0, // Adjust the spacing between images
      },
      imageContainer2: {
        marginTop: 32,
      },
      fullImage: {
        width: '100%', // Take up 100% width
        height: 230,   // Fixed height
      },

      pText: {
        color: "white",
        fontSize: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 16,
        textAlign: "center",
      },
    });

export default AboutScreen;