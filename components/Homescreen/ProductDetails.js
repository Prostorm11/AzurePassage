import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  Alert,
} from "react-native";
import Searchtab from "./searchtab";
import {
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { auth, firestore } from "../../firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import AddCartModal from "../MyCart/AddCartModal";
import { UserContext } from "../../Usercontext";

function ProductDetails({ route }) {
  const { identity, describe, price, more, source } = route.params;
  const [add, setAdd] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const { userProfile, loading,Firestoreproducts } = useContext(UserContext);

  const ShowAlert = () => {
    setshowalert(true);
    setTimeout(() => {
      setshowalert(false);
    }, 2000);
  };

  const cartpop = () => {
    setAdd(!add);
  };

  async function addtocart(newItem, amount) {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userRef = doc(firestore, "Profiles", currentUser.uid);
        await updateDoc(userRef, {
          cart: arrayUnion({ ...newItem, amount }), // Add amount to the item object
        });
        ShowAlert();
        cartpop();
      } else {
        Alert.alert("Login First");
      }
    } catch (error) {
      Alert.alert("Error", `${error}`);
      console.log("Error", `${error}`);
    }
  }

  return (
    <View style={styles.viewContainer}>
      <AddCartModal
        isModalVisible={add}
        handlemodal={cartpop}
        Mimage={source.find((obj) => obj.id == identity).image}
        price={price}
        addtocart={addtocart}
        source={source.find((obj) => obj.id == identity)}
        clearmodal={showalert}
      />
      <Searchtab />
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.carouselContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {source.find((obj)=>obj.id==identity).carouselImages.map((item, index) => (
                <ImageBackground
                  key={index}
                  style={styles.imageStyle}
                  source={{ uri: item }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.priceDescriptionContainer}>
            <Text style={styles.priceText}>
              <Text style={styles.pricePrefix}>GHS</Text>
              <Text style={styles.priceValue}>{price}</Text>
              {"\n"}
              <Text style={styles.priceInfo}>
                Price shown before tax| Extra 5% off with coins
              </Text>
            </Text>
            <Text style={styles.descriptionText}>{describe}</Text>
          </View>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.specificationsContainer}>
              <Text style={styles.specificationsText}>Specifications</Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={10}
                color="black"
              />
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.deliveryContainer}>
              <View style={styles.deliveryRow}>
                <View style={styles.deliveryInfo}>
                  <Text style={styles.deliveryText}>Delivery</Text>
                  <MaterialCommunityIcons
                    name="greater-than"
                    size={12}
                    color="black"
                  />
                </View>
                <View style={styles.locationInfo}>
                  <EvilIcons name="location" size={24} color="black" />
                  <Text>To Ghana</Text>
                </View>
              </View>
              <Text style={styles.shippingText}>Free Shipping</Text>
              <Text style={styles.deliveryTimeText}>
                <Text style={styles.deliveryTimePrefix}>Delivery</Text>
                :20-40 Days
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.choiceServiceContainer}>
              <View style={styles.choiceServiceInfo}>
                <Text style={styles.choiceServiceText}>Choice Service</Text>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={12}
                  color="black"
                />
              </View>
              <Text>Buyer Protection</Text>
            </View>
          </Pressable>
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.itemDescriptionTitle}>Item description</Text>
            {more.map((item, index) => (
              <View key={index} style={styles.moreImagesContainer}>
                <Image source={{ uri: item }} style={styles.imageStyle} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.staticView}>
        <View>
          <Pressable
            style={styles.messageButton}
            onPress={() => console.log("Pressed")}
          >
            <AntDesign name="message1" size={24} color="black" />
            <Text style={styles.messageText}>Message</Text>
          </Pressable>
        </View>
        <View style={styles.actionsContainer}>
          <Pressable style={styles.addButton} onPress={cartpop}>
            <Text style={styles.addButtonText}>Add to cart</Text>
          </Pressable>
          <Pressable
            style={[styles.addButton, styles.buyNowButton]}
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.addButtonText}>Buy now</Text>
          </Pressable>
        </View>
      </View>
      {showalert && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>Item added to cart!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    height: Dimensions.get("screen").height * 0.8,
  },
  carouselContainer: {
    height: Dimensions.get("window").height * 0.5,
  },
  imageStyle: {
    height: "100%",
    width: Dimensions.get("screen").width,
    resizeMode: "contain",
  },
  priceDescriptionContainer: {
    paddingHorizontal: 10,
    gap: 5,
    backgroundColor: "white",
    marginBottom: 1,
  },
  priceText: {
    color: "red",
  },
  pricePrefix: {
    fontWeight: "bold",
  },
  priceValue: {
    fontSize: 22,
    fontWeight: "bold",
  },
  priceInfo: {
    color: "grey",
    fontSize: 12,
  },
  descriptionText: {
    fontSize: 17,
  },
  specificationsContainer: {
    backgroundColor: "white",
    height: Dimensions.get("screen").height * 0.08,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginBottom: 5,
  },
  specificationsText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryContainer: {
    height: Dimensions.get("screen").height * 0.12,
    backgroundColor: "white",
    padding: 13,
    gap: 2,
    marginBottom: 1,
  },
  deliveryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationInfo: {
    flexDirection: "row",
  },
  shippingText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  deliveryTimeText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  deliveryTimePrefix: {
    fontWeight: "150",
    color: "grey",
  },
  choiceServiceContainer: {
    height: Dimensions.get("screen").height * 0.12,
    backgroundColor: "white",
    padding: 13,
    justifyContent: "space-between",
    marginBottom: 1,
  },
  choiceServiceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  choiceServiceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescriptionContainer: {
    marginTop: 5,
    backgroundColor: "white",
  },
  itemDescriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  moreImagesContainer: {
    height: Dimensions.get("screen").height * 0.3,
  },
  staticView: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: Dimensions.get("screen").height * 0.1,
    backgroundColor: "white",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  messageButton: {
    alignItems: "center",
  },
  messageText: {
    fontSize: 9,
    color: "grey",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "red",
    width: 125,
  },
  addButtonText: {
    fontWeight: "bold",
  },
  buyNowButton: {
    backgroundColor: "red",
  },
  snackbar: {
    position: "absolute",
    bottom: "30%",
    //left: 0,
    //right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    width: 200,
    alignSelf: "center",
  },
  snackbarText: {
    color: "white",
    fontSize: 14,
  },
});

export default ProductDetails;
