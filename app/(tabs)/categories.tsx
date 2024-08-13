import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>hallo Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
