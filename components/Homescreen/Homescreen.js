import React from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Wallpaper from "./Wallpaper";
import { AntDesign } from "@expo/vector-icons";
import SmallImageBox from "./SmallImageBox";
import randomimages from "../../api/randomimages";

function Homescreen() {
  const [text, textchange] = React.useState("");
  const Myimage = [
    require("@/assets/images/girlshoper.gif"),
    require("@/assets/images/gadgets.gif"),
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.View1Style}>
        <Entypo name="menu" size={28} color="black" />
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          GlamCart
        </Text>
        <Pressable style={styles.pressablestyle}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            placeholder="Search Items"
            placeholderTextColor="black"
            value={text}
            onChangeText={(newtext) => textchange(newtext)}
            style={styles.textfieldstyle}
          />
        </Pressable>

        <EvilIcons name="bell" size={28} color="black" />
      </View>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Wallpaper
            picture={Myimage[0]}
            describe="Want The Best Female Apparel, Come Grab Yours Now!!"
            text1="Shop Smarter"
            text2="Not Harder!"
          />
          <Wallpaper
            picture={Myimage[1]}
            text1="Essential For"
            text2="Gamers"
            describe={"Grab The Latest And Poweful Gaming Accesories"}
          />
        </ScrollView>
        <TouchableWithoutFeedback>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "Pink",
                  fontSize: 18,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Super<Text style={{ color: "red" }}>Deals</Text>
              </Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </View>
            <Text>Limited-time-offers</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.imageContainer}
              showsHorizontalScrollIndicator={false}
            >
              {randomimages.map((item, index) => (
                <SmallImageBox
                  image={{ uri: item }}
                  price={parseFloat(Math.random() * (200 - 100) + 100).toFixed(
                    2
                  )} sold={Math.floor(Math.random() * (200 - 100) + 100)}
                  rate={parseFloat(Math.random() * (5 - 3) + 3).toFixed(
                    1)}
                />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  View1Style: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bbbbc8",
    // paddingVertical: 10,
    gap: 10,
    height: "8%",
  },

  pressablestyle: {
    borderRadius: 19,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
    height: 32,
    width: 20,
    // marginHorizontal:10
  },
  textfieldstyle: {
    width: "100%",
  },
  view2style: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#bbbbc8",
    height: "40%",
  },
  imageContainer: {
    marginTop: 10,
  },
});

export default Homescreen;
