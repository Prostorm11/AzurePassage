import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../../../Usercontext';

const languages = [
  { key: 'en', name: 'English' },
  { key: 'es', name: 'Spanish' },
  { key: 'fr', name: 'French' },
  // Add more languages as needed
];

export default function LanguageSelectionScreen({ navigation }) {
  const { setLanguage } = useContext(UserContext);

  const handleLanguageSelect = (language) => {
    setLanguage(language.name);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {languages.map((language) => (
        <TouchableOpacity
          key={language.key}
          style={styles.item}
          onPress={() => handleLanguageSelect(language)}
        >
          <Text style={styles.itemText}>{language.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});
