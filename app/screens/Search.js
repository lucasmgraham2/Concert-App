import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useFetch from '../../hook/useFetch';
import styles from '../../styles/styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useFetch(query);

  const screenHeight = Dimensions.get('window').height;
  const imageHeight = screenHeight * 0.3; // 30% of the screen height

  const renderItem = ({ item }) => (
    <View style={localStyles.resultItem}>
      <Text style={localStyles.resultText}>{item.artist.name} - {item.eventDate}</Text>
      <Text style={localStyles.resultText}>{item.venue.name}, {item.venue.city.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={localStyles.searchBar}>
        <Icon name="search-outline" size={20} color="#888" style={localStyles.searchIcon} />
        <TextInput
          style={localStyles.searchInput}
          placeholder="Artists, Songs, Lyrics, and More"
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <Image
        source={require('../../assets/images/demon_hunter.jpg')}
        style={[styles.headerImage, { height: imageHeight }]}
      />
      <Text style={styles.header}>Welcome to Home Screen</Text>
      <Text style={styles.text}>Content similar to Apple Music's Search tab goes here.</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && (
        <FlatList
          data={data.setlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={localStyles.flatList}
        />
      )}
    </ScrollView>
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
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultText: {
    fontSize: 16,
  },
  flatList: {
    flexGrow: 0,
  },
});

export default Search;