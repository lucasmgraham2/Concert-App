import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const BottomNavLayout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {children}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Memories')}>
          <Text style={styles.buttonText}>Memories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Community')}>
          <Text style={styles.buttonText}>Community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavLayout;