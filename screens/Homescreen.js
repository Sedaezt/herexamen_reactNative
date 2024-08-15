import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: "Hockeystick for experts",
    price: "€ 299,99",
    brand: "DITA hockeystick",
    image: require('../assets/Frontpage/hockeystick.jpg'),
  },
  {
    id: 2,
    name: "Hockeystick for adults",
    price: "€ 200",
    brand: "DITA",
    image: require('../assets/Frontpage/ballerina.jpg'),
  },
];

const HomeScreen = ({ navigation }) => {
  const goToSport = () => {
    navigation.navigate('Sport');
  };

  const goToHockey = (product) => {
    navigation.navigate('Hockey', { product });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.holder}>
        <Text style={styles.welcomeText}>Hi there!</Text>
        <Text style={styles.goodSportsText}>Welcome to Fit & active</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Frontpage/korting.jpg')} style={styles.image} />
      </View>
      <View style={styles.holders}>
        <Text style={styles.goodSportsText}>-40% on all accessories</Text>
        <TouchableOpacity style={styles.button} onPress={goToSport}>
          <Text style={styles.buttonText}>See sport items</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      {products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => goToHockey(product)} style={styles.productContainer}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  holder: {
    marginVertical: 56,
    marginLeft: 30,
  },
  holders: {
    alignItems: "center",
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#062B65',
    paddingVertical: 12,
    paddingHorizontal: 120,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  welcomeText: {
    color: '#062B65',
    fontSize: 24,
  },
  goodSportsText:{
    color: '#062B65',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  image: {
    width: 350,
    height: 150,
    borderRadius: 16,
    marginTop: -30,
  },
  productContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#062B65',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#062B65',
    marginTop: 5,
  },
  productBrand: {
    fontSize: 14,
    color: '#062B65',
    marginTop: 5,
  },
});

export default HomeScreen;
