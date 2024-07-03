import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  Button,
} from "react-native";
import randomimages from "../../api/randomimages";
import Searchtab from "./searchtab";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

function ProductDetails({ route }) {
  const { identity } = route.params;
  const { describe } = route.params;
  const { price } = route.params;
  const { more } = route.params;
  return (
    <View style={styles.View1style}>
      <Searchtab></Searchtab>
      <View style={{ height: Dimensions.get("screen").height * 0.8 }}>
        <ScrollView>
          <View style={styles.View2style}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {randomimages[identity].carouselImages.map((item, key) => (
                <ImageBackground
                  style={styles.imagestyle}
                  source={{ uri: item }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.View3style}>
            <Text style={{ color: "red" }}>
              <Text style={{ fontWeight: "bold" }}>GHS</Text>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>{price}</Text>
              {`\n`}
              <Text style={{ color: "grey", fontSize: 12 }}>
                Price shown before tax| Extra 5% off with coins
              </Text>
            </Text>

            <Text style={{ fontSize: 17 }}>{describe}</Text>
          </View>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.View4style}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Specifications
              </Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={10}
                color="black"
              />
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.View5style}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" ,alignItems:"center",gap:5}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    Delivery
                  </Text>
                  <MaterialCommunityIcons
                    name="greater-than"
                    size={12}
                    color="black"
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <EvilIcons name="location" size={24} color="black" />
                  <Text>To Ghana</Text>
                </View>
              </View>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                Free Shipping
              </Text>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                <Text style={{ fontWeight: "150", color: "grey" }}>
                  Delivery
                </Text>
                :20-40 Days
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => console.log("Hello")}>
            <View style={styles.View6style}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Choice Service
                </Text>
              </View>
              <Text>Buyer Protection</Text>
            </View>
          </Pressable>
          <View style={{ marginTop: 5, backgroundColor: "white" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15 }}>
              Item description
            </Text>
            {more.map((item, key) => (
              <View style={{ height: Dimensions.get("screen").height * 0.3 }}>
                <Image source={{ uri: item }} style={styles.imagestyle} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.staticview}>
        <View>
          <Pressable
            style={{ alignItems: "center" }}
            onPress={() => console.log("Pressed")}
          >
            <AntDesign name="message1" size={24} color="black" />
            <Text style={{ fontSize: 9, color: "grey" }}>Message</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Pressable
            style={styles.Pressablestyle}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontWeight: "bold" }}>Add to cart</Text>
          </Pressable>
          <Pressable
            style={[styles.Pressablestyle, { backgroundColor: "red" }]}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontWeight: "bold" }}>Buy now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View1style: {
    flex: 1,
  },

  View2style: {
    height: Dimensions.get("screen").height * 0.5,
  },
  imagestyle: {
    height: "100%",
    width: Dimensions.get("screen").width,
    resizeMode:"contain"
  },
  View3style: {
    paddingHorizontal: 10,
    gap: 5,
    backgroundColor: "white",
    marginBottom: 1,
  },
  staticview: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    height: Dimensions.get("screen").height * 0.1,
    backgroundColor: "white",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  Pressablestyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "red",
    width: 125,
  },
  View4style: {
    backgroundColor: "white",
    height: Dimensions.get("screen").height * 0.08,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginBottom: 5,
  },
  View5style: {
    height: Dimensions.get("screen").height * 0.12,
    backgroundColor: "white",
    padding: 13,
    gap: 2,
    marginBottom: 1,
  },
  View6style: {
    height: Dimensions.get("screen").height * 0.12,
    backgroundColor: "white",
    padding: 13,
    justifyContent: "space-between",
    marginBottom: 1,
  },
});

export default ProductDetails;
