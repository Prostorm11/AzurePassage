import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from "react-native";
import { UserContext } from "../../Usercontext";
import { useNavigation } from "@react-navigation/native";

const ItemTile = ({ item }) => {
  const { userProfile, loading, productsData, Firestoreproducts } = useContext(UserContext);
  const navigation = useNavigation();
  const Product_identity = Firestoreproducts.find((obj) => obj.id == item.id);
  
  return (
    <Pressable
      style={styles.Pressablestyle}
      onPress={() => {
        navigation.navigate("productdetails", {
          identity: Product_identity.id,
          sold: Product_identity.sold,
          price: Product_identity.newprice,
          describe: Product_identity.description,
          more: Product_identity.more,
          source: Firestoreproducts,
        });
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
        <View style={styles.tagsContainer}>
          {item.tags && item.tags.map((tag) => (
            <Text numberOfLines={1} key={tag} style={styles.tag}>{tag}</Text>
          ))}
          <Text numberOfLines={1} style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{"GH₵ " + item.price}</Text>
          <View style={styles.ratingContainer}></View>
        </View>
        <Text>{item.delivery}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Pressablestyle: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 120,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  tag: {
    margin: 2,
    paddingHorizontal: 5,
    backgroundColor: "#A51910",
    borderRadius: 3,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  itemName: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft:5
  },
  ratingContainer: {
    flexDirection: "row",
  },
});

export default ItemTile;
