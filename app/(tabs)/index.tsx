import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Voeg de Ionicons toe

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Header View met achtergrondkleur */}
      <View style={styles.headerContainer}>
        {/* Fit&Active tekst */}
        <Text style={styles.headerText}>Fit&Active</Text>
        {/* Winkelmand icoon */}
        <Ionicons name="cart-outline" size={24} color="#fff" style={styles.cartIcon} />
      </View>
      
      {/* Welcome tekst */}
      <Text style={styles.welcomeText}>Welcome</Text>
      
      {/* Afbeelding */}
      <Image
        source={require('@/assets/images/home/korting.jpg')} // Zorg ervoor dat het pad klopt
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Ruimte bovenaan voor de statusbalk
    paddingHorizontal: 0, // Horizontale padding aan beide kanten
    backgroundColor: '#fdfdfd', // Achtergrondkleur blauw
    alignItems: 'center', // Centreert de inhoud horizontaal
  },
  headerContainer: {
    flexDirection: 'row', // Zorgt ervoor dat de tekst en het icoon naast elkaar staan
    justifyContent: 'space-between', // Ruimte tussen de tekst en het icoon
    width: '100%', // Zorgt ervoor dat de headerContainer over de volledige breedte is
    backgroundColor: '#062B65', // Achtergrondkleur van de header-container (donkerder blauw)
    paddingVertical: 35, // Verticale padding binnen de header-container
    alignItems: 'center', // Centreert de inhoud verticaal binnen de header-container
    position: 'absolute', // Zorgt ervoor dat de headerContainer bovenaan blijft
    top: 0,
    left: 0, 
    right: 0, // Positioneer de container helemaal rechts
  },
  headerText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white', // Witte tekstkleur voor betere zichtbaarheid op de achtergrond
  },
  cartIcon: {
    marginRight: 20, // Voeg marge toe aan de rechterkant van het icoon
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#121010', // Witte tekstkleur voor de welcome tekst
    marginTop: 80, // Ruimte tussen de header en de welcome tekst
    marginLeft: -200,
  },
  image: {
    width: 400, // Breedte van de afbeelding in pixels
    height: 200, // Hoogte van de afbeelding in pixels
    resizeMode: 'contain', // Zorgt ervoor dat de afbeelding volledig zichtbaar is zonder vervorming
  },
});

export default Index;
