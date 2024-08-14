// fitandactive/app/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from '@/app/(tabs)/index'; // Pad naar Index.tsx
import ProductDetail from '@/app/product/productDetail'; // Pad naar ProductDetail.tsx

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Index} options={{ title: 'Home' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
