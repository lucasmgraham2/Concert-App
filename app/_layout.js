import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../app/screens/Profile';
import BottomTabNavigator from '../components/BottomTabNavigator';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false, // Hide the header for the tab navigator
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Layout;