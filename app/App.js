import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './_layout';

const App = () => {
  return (
    <NavigationContainer>
      <Layout />
    </NavigationContainer>
  );
};

registerRootComponent(App);