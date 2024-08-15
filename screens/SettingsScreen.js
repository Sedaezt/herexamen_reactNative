import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Footer from '../components/Footer'; // Import the Footer component

const SettingsScreen = ({navigation}) => {
  const goToSport = () => {
    // Navigate to the "Sport" screen
    navigation.navigate('Sport');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.holder}>
        <Text style={styles.welcomeText}>About</Text>
        <Text style={styles.goodSportsText}> The Very Good Sports.</Text>
      </View>
      <View style={styles.holders}>
        <View style={styles.holder2}>
          <Text style={styles.goodSportsText}> Welkom</Text>
        </View>
        <Text style={styles.pText}> Welkom bij THE VERY GOOD SPORTS waar sport koning is. We zijn meer dan enkel een sportbedrijf; we zijn een hippe, leuke en sportieve community met als missie het brengen van de beste sportartikelen.</Text>
      </View>
      <View style={styles.holders}>
        <View style={styles.holder2}>
          <Text style={styles.goodSportsText}> Ons verhaal</Text>
        </View>
        <Text style={styles.pText}>We zijn ontstaan uit het brein van onze oprichter Yann Tagakou. Opgericht in 2024, zijn we begonnen aan een reis om iedereen van sportartikelen te voorzien. Sindsdien zijn we uitgegroeid tot een kleine startup die het halen wilt.</Text>
      </View>
      <View style={styles.holders}>
        <View style={styles.holder2}>
          <Text style={styles.welcomeText}> What we are all</Text>
          <Text style={styles.goodSportsText}> About</Text>
        </View>
        <Text style={styles.pText}>Eerst en vooral, wij zijn de nummer 1 website in sportartikelenverkoop. Maar we zijn meer dan dat. Ontdek dit allemaal.</Text>
        <TouchableOpacity style={styles.button} onPress={goToSport}>
          <Text style={styles.buttonText}>Get to know us</Text>
        </TouchableOpacity>
      </View>
      
      {/* Use the Footer component with the navigation prop */}
      <Footer navigation={navigation} />
    </ScrollView>
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
    color: '#FFFFFF', // Text color (white)
    fontSize: 24, // Optionally adjust text size
  },
  goodSportsText: {
    color: '#062B65', // Text color
    fontSize: 24, // Optionally adjust text size
    fontWeight: 'bold', // Optionally adjust text boldness
    textAlign: "center"
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

export default SettingsScreen;
