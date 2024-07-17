import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RateAliExpressScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  const submitFeedback = () => {
    // Handle feedback submission logic here
    console.log(`Rating: ${rating}, Feedback: ${feedback}`);
    // Optionally navigate back or show a success message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate AliExpress</Text>
      
      <Text style={styles.subHeader}>Tap to rate:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((rate) => (
          <TouchableOpacity
            key={rate}
            style={styles.starButton}
            onPress={() => handleRating(rate)}
          >
            <Text style={[styles.star, rate <= rating ? styles.selectedStar : null]}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.feedbackInput}
        placeholder="Leave your feedback here..."
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      
      <TouchableOpacity style={styles.submitButton} onPress={submitFeedback}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
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
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starButton: {
    marginRight: 10,
  },
  star: {
    fontSize: 30,
    color: '#ccc',
  },
  selectedStar: {
    color: '#FFD700', // Gold color for selected star
  },
  feedbackInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
