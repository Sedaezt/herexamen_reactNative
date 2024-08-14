import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Fit&Active</Text>
        <Ionicons name="cart-outline" size={24} color="#fff" style={styles.cartIcon} />
      </View>
      
      <Text style={styles.welcomeText}>Welcome</Text>
      
      <Image
        source={require('@/assets/images/home/korting.jpg')} 
        style={styles.image}
      />
      
      <Text style={styles.discountText}>-40% on all accesoires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 0,
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
    width: 370, 
    height: 200,
    resizeMode: 'contain', 
  },
  discountText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#062B65', 
    marginTop: -15, 
    marginLeft: -120,
    textAlign: 'center', 
  },
});

export default Index;
