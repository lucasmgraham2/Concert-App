import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../app/screens/Search';
import Memories from '../app/screens/Memories';
import Community from '../app/screens/Community';
import ProfileButton from '../components/ProfileButton';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Search') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'Memories') {
      iconName = focused ? 'images' : 'images-outline';
    } else if (route.name === 'Community') {
      iconName = focused ? 'people' : 'people-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#007BFF',
  tabBarInactiveTintColor: 'gray',
  headerRight: () => <ProfileButton />,
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Memories" component={Memories} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;