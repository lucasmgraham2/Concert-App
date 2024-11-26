import React from 'react';
import { View, Text } from 'react-native';
import BottomNavLayout from '../../components/BottomNavLayout';
import styles from '../../styles/styles';

const Memories = () => {
  return (
    <BottomNavLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Memories Page</Text>
      </View>
    </BottomNavLayout>
  );
};

export default Memories;