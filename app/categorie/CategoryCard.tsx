// CategoryCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Category = {
  id: string;
  name: string;
  image: any;
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={category.image} style={styles.image} />
    <Text style={styles.name}>{category.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minWidth: 250,
    marginVertical: 0,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginTop: 20, // Voegt 30px ruimte toe boven de afbeelding
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
});

export default CategoryCard;
