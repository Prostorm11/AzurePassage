import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../../../Usercontext";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(
    require("@/assets/images/Facebook.png")
  ); // Initial profile image
  const { userProfile, loading } = useContext(UserContext);
  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission Denied",
        "You need to grant permission to access photos."
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setProfileImage({ uri: pickerResult.uri });
    }
  };
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "white",
          marginBottom: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            width: 50,
            position: "absolute",
            left: 0,
          }}
        >
          <Pressable onPress={() => navigation.goBack()} style={{ width: 50 }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
        </View>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={{ backgroundColor: "white", marginBottom: 15, height: 80 }}>
        <TouchableOpacity
          style={styles.photoContainer}
          onPress={handleImagePick}
        >
          <Text style={styles.itemText}>Photo</Text>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#FF3500",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>
              {userProfile.name[0]}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Account information</Text>
          <Text style={styles.valueText}>{userProfile.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Name</Text>
          <Text style={styles.valueText}>{userProfile.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Gender</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Birthday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Country/region</Text>
          <Text style={styles.valueText}>Ghana</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Shipping address</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Delete account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  View1style: {
    backgroundColor: "white",
  },
  header: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 15,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 0.4,
  },
  itemText: {
    fontSize: 16,
  },
  valueText: {
    fontSize: 16,
    color: "#888",
  },
  photoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
