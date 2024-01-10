// DrinksScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

const DrinksScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text>Drink Screen</Text>
          
          {/* Use the Footer component with the navigation prop */}
          <Footer navigation={navigation} />
        </View>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ECC1BD', // Rood
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

export default DrinksScreen;