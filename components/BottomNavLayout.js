import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const BottomNavLayout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {children}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Memories')}>
          <Text style={styles.buttonText}>Memories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Community')}>
          <Text style={styles.buttonText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavLayout;