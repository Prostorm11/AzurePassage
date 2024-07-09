import React from "react";
import { View, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Logo() {
    const navigation=useNavigation();
  return (
    <View style={{ flexDirection: "row" ,justifyContent:"space-between"}}>
      
      <View style={styles.view1style}>
        <Image
          source={require("@/assets/images/smalllogo.png")}
          style={styles.logostyle}
        />
      </View>
      <View style={{width:25,height:25,marginHorizontal:5}}>
        <Pressable onPress={()=>navigation.goBack()}>

        <FontAwesome5 name="times" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1style: {
    height: "25%",
    position: "relative",
  },
  logostyle: {
    height: 97,
    width: 120,
    resizeMode: "contain",
    left: 30,
  },
});
