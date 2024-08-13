import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>INDEX Screen</Text>
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

export default Index;
