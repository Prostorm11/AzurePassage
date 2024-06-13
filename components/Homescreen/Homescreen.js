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
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Wallpaper from "./Wallpaper";

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
      <View style={styles.view2style}>
        <ScrollView horizontal>

          <Wallpaper picture={Myimage[0]} 
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
      </View>
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
 
});

export default Homescreen;
