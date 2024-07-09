import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
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
    <SafeAreaView>
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
            <Text style={styles.menuItem}>Electronics</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Profile")}
          >
            <Text style={styles.menuItem}>Apparel</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Settings")}
          >
            <Text style={styles.menuItem}>Jewelry</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Shoes")}
          >
            <Text style={styles.menuItem}>Shoes</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Toys")}
          >
            <Text style={styles.menuItem}>Toys</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Tools")}
          >
            <Text style={styles.menuItem}>Tools</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => handleMenuItemPress("Automotive")}
          >
            <Text style={styles.menuItem}>Automotive</Text>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </SafeAreaView>
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
