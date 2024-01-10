// HomeScreen.js (en andere schermen)
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

const HomeScreen = ({navigation}) => {
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
            <Text style={styles.welcomeText}>Welcome to  </Text>
            <Text style={styles.goodDrinksText}> The Very Good Drinks.</Text>
          </View>
            {/* Add two images side by side */}
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Frontpage/Drinking_orange.jpg')} style={styles.image} />
            <Image source={require('../assets/Frontpage/Bottle_Jack.jpg')} style={styles.image} />
          </View>
          <View style={styles.holders}>
            <View style={styles.holder2}>
              <Text style={styles.welcomeText}>Ons  </Text>
              <Text style={styles.goodDrinksText}> Assortiment</Text>
            </View>
            <Text style={styles.pText}> Heb jij een feest of denk je een kleine avond te organiseren. Twijfel dan zeker niet om ons assortiment te bekijken. We beloven je de beste kwaliteit aan dranken en de meeste keuze. Zowel met als zonder alcohol</Text>
            <TouchableOpacity style={styles.button} onPress={goToDrinks}>
              <Text style={styles.buttonText}>Go to Drinks</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer2}>
            <Image source={require('../assets/Frontpage/apperitief.png')} style={styles.fullImage} />
          </View>
          <View style={styles.holders}>
            <View style={styles.holder2}>
              <Text style={styles.welcomeText}>Enkel  </Text>
              <Text style={styles.goodDrinksText}> Alcohol</Text>
            </View>
            <Text style={styles.pText}>Wil je je een avond organiseren met drank? Kijk dan zeker door ons assortiment met alcohol. Voor iedereen is er iets. 
            {'\n'}{'\n'}Vergeet niet ons vakmanschap drink je met verstand. </Text>
            <TouchableOpacity style={styles.button} onPress={goToAbout}>
              <Text style={styles.buttonText}>Voor mij alcohol</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer2}>
            <Image source={require('../assets/Frontpage/assortiment.jpg')} style={styles.fullImage} />
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

export default HomeScreen;