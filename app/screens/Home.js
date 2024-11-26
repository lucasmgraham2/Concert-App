import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import BottomNavLayout from '../../components/BottomNavLayout';
import styles from '../../styles/styles';

const Home = ({ navigation }) => {
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.3; // 30% of the screen height

  return (
    <BottomNavLayout>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/demon_hunter.jpg')}
          style={[styles.headerImage, { height: imageHeight }]}
        />
        <Text style={styles.header}>Welcome to Home Screen</Text>
      </View>
    </BottomNavLayout>
  );
};

export default Home;