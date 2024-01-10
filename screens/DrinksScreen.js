// DrinksScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

const DrinksScreen = ({navigation}) => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.holder}>
          <Text style={styles.welcomeText}>All  </Text>
          <Text style={styles.goodDrinksText}> Drinks</Text>
        </View>
        <View style={styles.imageContainer2}>
          <Image source={require('../assets/Frontpage/assortiment.jpg')} style={styles.fullImage} />
        </View>
        <View style={styles.assortimenten}>
          <View style={styles.assortiment}>
            <Text style={styles.goodDrinksText}> Smirnof Vodka</Text>
            <View style={styles.detailsHolder}>
              <Text style={styles.details}> Geniet je graag van Smirnoff Vodka? Kies dan voor deze Smirnoff Vodka 1 liter fles.</Text>
              <Image source={require('../assets/dranken/smirnof_vodka.webp')} style={styles.halfImage} />
            </View>
            <View style={styles.price}>
              <Text style={styles.euro}> € <Text style={styles.tag}> 20,95  </Text> </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Koop hier</Text>
            </TouchableOpacity>
          </View>

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
      fullImage: {
        width: '100%', // Take up 100% width
        height: 230,   // Fixed height
      },
      halfImage: {
        width: "50%",
        aspectRatio: 1,
        resizeMode: "contain",
      },
      assortimenten: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 32,
      },
      assortiment: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 16,
        backgroundColor: "white",
        borderRadius: 12,
        justifyContent: "center",
        marginTop: 32,
      },
      detailsHolder: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 32,
        marginBottom: 32,
      },
      details: {
        textAlign: "center",
        fontSize: 16,
        width: "49%",
        paddingRight: 16,
      },
      euro: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
      },
      
      button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        marginTop: 10, // Add space between the button and other content
        alignItems: 'center',
      },

      buttonText: {
        color: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#E52529',
        fontSize: 16,
      },
    

    });

export default DrinksScreen;