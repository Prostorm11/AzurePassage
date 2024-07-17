import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ViewedScreen() {
  const [viewingHistory, setViewingHistory] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Viewed Settings</Text>

      <View style={styles.item}>
        <Text style={styles.itemText}>Viewing History</Text>
        <Switch
          value={viewingHistory}
          onValueChange={(value) => setViewingHistory(value)}
        />
      </View>

      <Text style={styles.importantText}>
        Important: If turned off, your viewing history will be deleted and the recently items list will no longer be available.
      </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  importantText: {
    marginTop: 20,
    fontSize: 14,
    color: '#d9534f',
  },
});
