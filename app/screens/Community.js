import React from 'react';
import { View, Text } from 'react-native';
import BottomNavLayout from '../../components/BottomNavLayout';
import styles from '../../styles/styles';

const Community = () => {
  return (
    <BottomNavLayout>
      <View style={styles.container}>
        <Text style={styles.header}>Community Page</Text>
      </View>
    </BottomNavLayout>
  );
};

export default Community;