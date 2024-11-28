import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';

const Search = () => {
  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.3; // 30% of the screen height

  return (
    <View style={styles.container}>
      <View style={localStyles.searchBar}>
        <Icon name="search-outline" size={20} color="#888" style={localStyles.searchIcon} />
        <TextInput
          style={localStyles.searchInput}
          placeholder="Artists, Songs, Lyrics, and More"
          placeholderTextColor="#888"
        />
      </View>
      <Image
        source={require('../../assets/images/demon_hunter.jpg')}
        style={[styles.headerImage, { height: imageHeight }]}
      />
      <Text style={styles.header}>Welcome to Home Screen</Text>
      <Text style={styles.text}>Content similar to Apple Music's Search tab goes here.</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});

export default Search;