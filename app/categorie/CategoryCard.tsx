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
    maxWidth: 300, // Zorgt ervoor dat de kaart niet breder is dan 300px
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Breedte van de afbeelding vult de breedte van de kaart
    height: 250,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
});

export default CategoryCard;
