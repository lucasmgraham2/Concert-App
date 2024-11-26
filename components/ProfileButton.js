import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.profileButton}
      onPress={() => navigation.navigate('Profile')}
    >
      <Text style={styles.profileButtonText}>P</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileButton;