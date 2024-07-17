import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const currencies = [
  { key: 'USD', name: 'US Dollar' },
  { key: 'EUR', name: 'Euro' },
  { key: 'JPY', name: 'Japanese Yen' },
  { key: 'GHA', name: 'Ghanaian Cedis'},
  // Add more currencies as needed
];

export default function CurrencySelectionScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = currencies.filter(currency => 
      currency.name.toLowerCase().includes(text.toLowerCase()) ||
      currency.key.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCurrencies(filtered);
  };

  const handleCurrencySelect = (currency) => {
    navigation.navigate('Settings', { selectedCurrency: currency });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Currency"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCurrencies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleCurrencySelect(item)}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemValue}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  itemValue: {
    fontSize: 16,
    color: '#888',
  },
});
