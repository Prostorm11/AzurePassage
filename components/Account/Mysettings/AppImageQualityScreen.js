import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AppImageQualityScreen() {
  const [selectedQuality, setSelectedQuality] = useState('High');

  const qualities = [
    { key: 'high', name: 'Smart Quality Mode' },
    { key: 'medium', name: 'High Quality (Suitable for Wi-Fi)' },
    { key: 'low', name: 'Normal Quality (Suitable for 3G or G)' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Image Quality</Text>
      {qualities.map((quality) => (
        <TouchableOpacity
          key={quality.key}
          style={[
            styles.item,
            selectedQuality === quality.name && styles.selectedItem,
          ]}
          onPress={() => setSelectedQuality(quality.name)}
        >
          <Text
            style={[
              styles.itemText,
              selectedQuality === quality.name && styles.selectedItemText,
            ]}
          >
            {quality.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: '#007bff',
  },
  selectedItemText: {
    color: '#fff',
  },
});
