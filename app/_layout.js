import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Memories from './screens/Memories';
import Community from './screens/Community';
import ProfileButton from '../components/ProfileButton';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <ProfileButton />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Memories"
        component={Memories}
        options={{
          headerRight: () => <ProfileButton />,
        }}
      />
      <Stack.Screen
        name="Community"
        component={Community}
        options={{
          headerRight: () => <ProfileButton />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Layout;