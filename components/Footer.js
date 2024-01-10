// Footer.js

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';


    

const Footer = ({navigation}) => {
    const goToHome = () => {
        // Navigate to the "Drinks" screen
        navigation.navigate('Home');
      };
  return (
    <View style={styles.footer}>
      <View style={styles.footerImageContainer}>
        <TouchableOpacity onPress={goToHome}>
            <Image
            source={require('../assets/Footer/TVGD_logo.png')}
            style={styles.footerImage}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.footerImageContainer}>
        <Image
          source={require('../assets/Footer/social_media_icons.jpg')}
          style={styles.footerImage2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // White background color for the footer
    paddingVertical: 8, // Adjust as needed
  },
  footerImageContainer: {
    marginHorizontal: 8, // Adjust spacing between images
  },
  footerImage: {
    width: 281, // Adjust image width as needed
    height: 69, // Adjust image height as needed
    marginBottom: 16,
  },
  footerImage2: {
    width: 125, // Adjust image width as needed
    height: 109, // Adjust image height as needed
    marginBottom: 16,
  },
});

export default Footer;