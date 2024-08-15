import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen.js';
import SportScreen from './screens/SportScreen.js';
import FavoritesScreen from './screens/FavoritesScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import Hockey from './screens/details/Hockey.js'; // Zorg dat dit pad klopt
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = ({ route }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#062B65' },
      headerTitleStyle: { color: 'white' },
      headerTitleAlign: 'center',
      headerTitle: 'Fit & Active',
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen 
      name="Screen" 
      component={route.params.component} 
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="Hockey"
      component={Hockey}
      options={{ title: 'Hockey Details' }}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sport') {
              iconName = focused ? 'basketball' : 'basketball-outline'; // Sporticoon
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'star' : 'star-outline'; // Icoon voor Favorites
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'; // Instellingenicoon
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#062B65',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 70,
            paddingBottom: 10, // Pas de paddingBottom aan om ruimte onderaan toe te voegen
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={() => <StackNavigator route={{ params: { component: HomeScreen }}} />}
          options={{ headerShown: false }} // Verberg de tab titel
        />
        <Tab.Screen 
          name="Sport" 
          component={() => <StackNavigator route={{ params: { component: SportScreen }}} />}
          options={{ headerShown: false }} // Verberg de tab titel
        />
        <Tab.Screen 
          name="Favorites" 
          component={() => <StackNavigator route={{ params: { component: FavoritesScreen }}} />}
          options={{ headerShown: false }} // Verberg de tab titel
        />
        <Tab.Screen 
          name="Settings" 
          component={() => <StackNavigator route={{ params: { component: SettingsScreen }}} />}
          options={{ headerShown: false }} // Verberg de tab titel
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
