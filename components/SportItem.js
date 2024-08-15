// sport item
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SportItem = ({ id, title, info, sportImage, price }) => {
  return (
    <View style={styles.assortiment}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{id}</Text>
      <View style={styles.detailsHolder}>
        <Text style={styles.details}>{info}</Text>
        <Image source={{ uri: sportImage }} style={styles.halfImage} />
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
    titleText: {
        color: '#E52529', 
        fontSize: 24,
        fontWeight: 'bold',
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
    price: {
        textAlign: "center",
    },
    euro: {
        color: '#062B65',
        fontWeight: "bold",
        fontSize: 16,
    },
    tag: {
        fontSize: 18,
    },
    button: {
        backgroundColor: '#062B65',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default SportItem;
