import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";

function Menu() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleMenu = () => {
    setModalVisible(!isModalVisible);
  };
  const handleMenuItemPress = (item) => {
    console.log("selected item:", item);
  };
  return (
    <View>
      <Pressable onPress={toggleMenu}>
        <Entypo name="menu" size={28} color="black" />
      </Pressable>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleMenu}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <TouchableWithoutFeedback onPress={() => handleMenuItemPress("Home")}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Profile")}
          >
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Settings")}
          >
            <Text style={styles.menuItem}>Settings</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Logout")}
          >
            <Text style={styles.menuItem}>Logout</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#bbbbc8",
    padding: 5,
    borderRadius: 10,
    width: "40%",
    alignSelf: "flex-start",
  },
 
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
  modal: {
    justifyContent: "flex-start",
    margin: 0,
  },
});
export default Menu;
