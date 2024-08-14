// Categories.tsx
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '@/app/header'; // Zorg ervoor dat je pad klopt
import CategoryCard from '@/app/categorie/CategoryCard'; // Zorg ervoor dat je pad klopt

// Categorieën kunnen eenvoudig worden gedefinieerd als een array van objecten.
const categories = [
  {
    id: '1',
    name: 'Sport',
    image: require('@/assets/images/home/basketbal.jpg'),
  },
  {
    id: '2',
    name: 'Accessoires',
    image: require('@/assets/images/home/hockeystick.jpg'),
  },
];

const Categories: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default Categories;
