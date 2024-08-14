import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '@/app/header'; // Zorg ervoor dat je pad klopt

// Definieer het type voor een product
type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: any; // Aangezien images vaak geen expliciet type hebben, gebruiken we 'any'
};

// Lijst met producten
const products: Product[] = [
  // ... je productdata
];

const Index: React.FC = () => {
  // Gebruik het gedefinieerde type Product voor 'item'
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Fit&Active" />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Image
        source={require('@/assets/images/home/korting.jpg')} 
        style={styles.image}
      />
      <Text style={styles.discountText}>-40% on all accessories</Text>

      {/* FlatList om producten weer te geven */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, 
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%', 
    backgroundColor: '#062B65', 
    paddingVertical: 35, 
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cartIcon: {
    marginRight: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#121010',
    marginTop: 80, 
    marginLeft: -200,
  },
  image: {
    width: 340, 
    height: 200, 
    resizeMode: 'contain',
  },
  discountText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#062B65', 
    marginTop: -15,
    marginLeft: -80,
    textAlign: 'center',
  },
  productsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  productCard: {
    width: '45%',
    margin: '2.5%', 
    padding: 10, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 10,
  },
  productImage: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
  },
  productTitle: {
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#062B65', 
    marginTop: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14, 
    color: '#333', 
    marginTop: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 12, 
    color: '#666', 
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Index;
