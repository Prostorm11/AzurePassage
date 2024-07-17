import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function AddressScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Shipping Address</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/3.jpg')}
            style={styles.addressImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.addressTextContainer}>
          <Text style={styles.addressText}>You haven't saved any address</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add New Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  addressTextContainer: {
    alignItems: 'center',
  },
  addressText: {
    fontSize: 18,
    marginBottom: 100,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
