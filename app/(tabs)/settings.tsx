import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>SETTING Screen</Text>
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

export default Setting;
