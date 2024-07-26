import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, firestore } from "../../firebaseConfig";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { UserContext } from "../../Usercontext";

const CartScreen = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { userProfile, loading } = useContext(UserContext);

  const deleteItem = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser && selectedItem) {
        const docRef = doc(firestore, "Profiles", currentUser.uid);
        setShowModal(false);
        await updateDoc(docRef, {
          cart: arrayRemove(selectedItem),
        });
        setSelectedItem(null);
      }
    } catch (e) {
      console.log(`Error deleting item: ${e}`);
    }
  };

  const renderItem = ({ item }) => {
    
    return (
      <Pressable
        onPress={() =>{
          navigation.navigate("productdetails", {
            identity: item.id,
            sold: item.sold,
            price: item.newprice,
            describe: item.description,
            more: item.more,
            source: cartItems,
          });console.log(item)}
        }
      >
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={{ justifyContent: "space-around", flex: 1 }}>
            <Text style={styles.itemName} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.itemPrice}>
              <Text>Ghc</Text>
              {item.newprice}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Free Shipping</Text>
              <TouchableOpacity
                style={styles.trashIcon}
                onPress={() => {
                  setSelectedItem(item);
                  setShowModal(true);
                }}
              >
                <Icon name="trash" size={20} color="#FF3E56" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const cartItems = userProfile ? userProfile.cart : [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cartText}>Cart ({cartItems.length})</Text>
        <View style={styles.headerIcons}>
          <Icon name="map-marker" size={20} color="#000" style={styles.icon} />
          <Icon name="heart" size={20} color="#000" style={styles.icon} />
        </View>
      </View>
      {cartItems.length === 0 ? (
        <View style={styles.cartContent}>
          <Icon
            name="shopping-cart"
            size={100}
            color="#ddd"
            style={styles.faintCartIcon}
          />
          <Text style={styles.emptyCartText}>
            No items yet? Continue shopping to explore more.
          </Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigate("Shop")}
          >
            <Text style={styles.exploreButtonText}>Explore items</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            <Text style={styles.moreToLove}>More to love</Text>
          }
        />
      )}
      {selectedItem && (
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Are you sure you want to delete this item?</Text>
              <View style={styles.modalButtons}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    setShowModal(false);
                    setSelectedItem(null);
                  }}
                />
                <Button title="Delete" onPress={deleteItem} color="#FF3E56" />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cartText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  cartContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  faintCartIcon: {
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  exploreButton: {
    backgroundColor: "#FF3E56",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  exploreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  moreToLove: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: "#f8f8f8",
    margin: 5,
    borderRadius: 5,
    flex: 1,
    padding: 10,
    flexDirection: "row",
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 20,
    color: "#FF3E56",
    marginTop: 5,
  },
  trashIcon: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default CartScreen;
