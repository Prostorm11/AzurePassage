import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Alert, ScrollView } from "react-native";
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, firestore } from "@/firebaseConfig";
import { UserContext } from "./Usercontext";

function UserProfile() {
  const{userProfile,loading}=useContext(UserContext)

 

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {userProfile ? (
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Name: {userProfile.name}</Text>
          <Text style={styles.profileText}>Email: {userProfile.email}</Text>
          <Text style={styles.profileText}>Number: {userProfile.number}</Text>
          <Text style={styles.profileText}>Country: {userProfile.country}</Text>
          <Text style={styles.profileText}>Orders Made: {userProfile.ordersMade.length}</Text>
          <Text style={styles.profileText}>Cart Items: {userProfile.cart.length}</Text>
        </View>
      ) : (
        <View style={styles.errorContainer}>
          <Text>No profile information available</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileContainer: {
    width: Dimensions.get("screen").width - 32,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserProfile;
