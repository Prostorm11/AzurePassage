import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Modal from "react-native-modal";

function AddCartModal({ Mimage, isModalVisible, handlemodal, price, addtocart, source, clearmodal }) {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };

 

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={handlemodal}
      style={styles.modalstyle}
    >
      <SafeAreaView style={styles.safestyle}>
        <View style={styles.Viewstyle}>
          <Image source={{ uri: Mimage }} style={styles.imagestyle} />
          <Text style={styles.priceText}>
            <Text style={styles.pricePrefix}>GHS</Text>
            <Text style={styles.priceValue}>{price}</Text>
            {"\n"}
            <Text style={styles.priceInfo}>
              Price shown before tax | Extra 5% off with coins
            </Text>
          </Text>
          <View style={styles.view2style}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Quantity</Text>
            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
              <Pressable onPress={decrease}>
                <View style={styles.circlestyle}>
                  <Text>-</Text>
                </View>
              </Pressable>
              <Text>{quantity}</Text>
              <Pressable onPress={increase}>
                <View style={styles.circlestyle}>
                  <Text>+</Text>
                </View>
              </Pressable>
            </View>
            <Pressable style={styles.Pressablestyle} onPress={()=>{addtocart(source,quantity);console.log(source)}}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  imagestyle: {
    height: "50%",
    width: "100%",
  },
  Viewstyle: {
    height: Dimensions.get("screen").height * 0.6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    padding: 15,
  },
  modalstyle: {
    margin: 0,
    justifyContent: "flex-end",
  },
  priceText: {
    color: "red",
  },
  pricePrefix: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  priceInfo: {
    color: "grey",
    fontSize: 14,
  },
  circlestyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  Pressablestyle: {
    width: "100%",
    borderWidth: 2,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  view2style: {
    bottom: 0,
    position: "absolute",
    margin: 15,
    width: "100%",
    gap: 12,
  },
  safestyle: {
   // flex: 1,
  },
});

export default AddCartModal;
