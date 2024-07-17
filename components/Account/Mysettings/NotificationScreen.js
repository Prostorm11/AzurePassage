import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function NotificationScreen() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Settings</Text>

      <View style={styles.item}>
        <Text style={styles.itemText}>Email Notifications</Text>
        <Switch
          value={emailNotifications}
          onValueChange={(value) => setEmailNotifications(value)}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={(value) => setPushNotifications(value)}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>SMS Notifications</Text>
        <Switch
          value={smsNotifications}
          onValueChange={(value) => setSmsNotifications(value)}
        />
      </View>
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
});
