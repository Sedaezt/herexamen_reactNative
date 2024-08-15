// AccessoiresScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccessoiresScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hier komt de inhoud voor Accessoires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  text: {
    fontSize: 20,
    color: '#062B65',
  },
});

export default AccessoiresScreen;
