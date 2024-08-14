// Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    <Ionicons name="cart-outline" size={24} color="#fff" style={styles.cartIcon} />
  </View>
);

const styles = StyleSheet.create({
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
});

export default Header;
