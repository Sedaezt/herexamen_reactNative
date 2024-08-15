import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '@/app/header';
import CategoryCard from '@/app/categorie/CategoryCard';

type Category = {
  id: string;
  name: string;
  image: any;
};

const categories: Category[] = [
  {
    id: '1',
    name: 'Sport',
    image: require('@/assets/images/home/basketbal.jpg'),
  },
  {
    id: '2',
    name: 'Accessoires',
    image: require('@/assets/images/home/ballerina.jpg'),
  },
];

const Categories: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Fit&Active" />
      <View style={styles.content}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    marginTop: 35, // Ruimte voor de header
  },
  content: {
    flex: 1,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#062B65',
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default Categories;
