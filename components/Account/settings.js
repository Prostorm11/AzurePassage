import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig"; // Adjust this import based on your firebaseConfig setup
import ModalSignin from "./ModalSignin";
import Modal from "react-native-modal";

function Settings(props) {
  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace("bottomnavigator");
      console.log("Logout success");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  const toggleMenu = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.View1style}>
      <View style={{ gap: 0.5 }}>
        <View style={styles.View2style}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Settings</Text>
          <View style={styles.innerview2}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ width: 50 }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={() =>
            currentUser ? navigation.navigate("profile") : toggleMenu()
          }
        >
          <View style={styles.innerinner}>
            <Text>Profile</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("address")}>
          <View style={styles.innerinner}>
            <Text>Shipping address</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={{ gap: 0.5 }}>
        <Pressable>
          <View style={styles.innerinner}>
            <Text>Ship to</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("currency")}>
          <View style={styles.innerinner}>
            <Text>Currency</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("language")}>
          <View style={styles.innerinner}>
            <Text>Language</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={{ gap: 0.5 }}>
        <Pressable onPress={() => navigation.navigate("rate")}>
          <View style={styles.innerinner}>
            <Text>Rate Glamcart</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
        <View style={styles.innerinner}>
          <Text>Privacy Policy</Text>
          <FontAwesome name="angle-right" size={12} color="black" />
        </View>
        <Pressable onPress={() => navigation.navigate("notifications")}>
          <View style={styles.innerinner}>
            <Text>Notification Settings</Text>
            <FontAwesome name="angle-right" size={12} color="black" />
          </View>
        </Pressable>
      </View>
      {auth.currentUser === null && (
        <Pressable
          style={styles.pressablestyle}
          onPress={() => {
            navigation.navigate("user");
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
        </Pressable>
      )}
      {auth.currentUser !== null && (
        <Pressable style={styles.pressablestyle} onPress={handleLogout}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Out</Text>
        </Pressable>
      )}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleMenu}
        style={styles.modalStyle}
      >
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <ModalSignin toggle={toggleMenu} />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  View1style: {
    flex: 1,
    gap: 10,
    width: Dimensions.get("screen").width,
  },
  modalStyle: {
    margin: 0,
    justifyContent: "flex-end",
  },
  View2style: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    height: 50,
  },
  innerview2: {
    position: "absolute",
    left: 0,
    marginLeft: 15,
  },
  innerinner: {
    height: 50,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressablestyle: {
    marginHorizontal: Dimensions.get("screen").width * 0.05,
    width: Dimensions.get("screen").width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    bottom: "5%",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "red",
    height: "7%",
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Settings;
