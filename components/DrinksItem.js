
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform } from 'react-native';


const DrinksItem = ({id, title, info, drinkImage,price}) => {
  return (
    <View style={styles.assortiment}>
      <Text style={styles.goodDrinksText2}>{title}</Text>
      <Text style={styles.goodDrinksText2}>{id}</Text>
      <View style={styles.detailsHolder}>
        <Text style={styles.details}>{info}</Text>
        <Image source={{ uri: drinkImage }} style={styles.halfImage} />
      </View>
      <View style={styles.price}>
        <Text style={styles.euro}>€ <Text style={styles.tag}>{price}</Text></Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Koop hier</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
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
    goodDrinksText2: {
        color: '#E52529', 
        fontSize: 24, // Optioneel: pas de grootte van de tekst aan
        fontWeight: 'bold', // Optioneel: pas de dikte van de tekst aan
        textAlign: "center"
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
    halfImage: {
        width: "50%",
        aspectRatio: 1,
        resizeMode: "contain",
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
export default DrinksItem;