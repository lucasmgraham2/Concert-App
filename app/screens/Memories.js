import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, ScrollView, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../styles/styles';

const Memories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [concertName, setConcertName] = useState('');
  const [artists, setArtists] = useState(['']);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addArtist = () => {
    setArtists([...artists, '']);
  };

  const handleArtistChange = (text, index) => {
    const newArtists = [...artists];
    newArtists[index] = text;
    setArtists(newArtists);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const renderDatePicker = () => {
    if (Platform.OS === 'web') {
      return (
        <TextInput
          style={styles.input}
          type="date"
          value={date.toISOString().split('T')[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      );
    } else {
      return (
        <>
          <TouchableOpacity style={localStyles.dateButton} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.buttonText}>Select Date</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Memories Page</Text>
      <TouchableOpacity style={localStyles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Add a Concert</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={localStyles.modalView}>
          <ScrollView>
            <Text style={styles.header}>Add Concert Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Concert Name"
              value={concertName}
              onChangeText={setConcertName}
            />
            {artists.map((artist, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Artist ${index + 1}`}
                value={artist}
                onChangeText={(text) => handleArtistChange(text, index)}
              />
            ))}
            <TouchableOpacity style={localStyles.addArtistButton} onPress={addArtist}>
              <Text style={styles.buttonText}>+ Add Artist</Text>
            </TouchableOpacity>
            {renderDatePicker()}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const localStyles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  addArtistButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  dateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Memories;