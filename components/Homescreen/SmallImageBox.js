import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function SmallImageBox({ image, price, rate, sold }) {
  return (
    <View style={styles.View1style} onStartShouldSetResponder={() => true}>
      <View style={styles.View2style}>
        <Image source={image} style={styles.imagestyle} />
      </View>
      <View style={styles.View3style}>
        <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
          GHC {price}
        </Text>
        <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
          <Text style={{ color: "gray", fontSize:12}}>{sold} sold</Text>
          <AntDesign name="star" size={12} color="gray" />
          <Text style={{ color: "gray", fontSize:12}}>{rate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View1style: {
    width: Dimensions.get("screen").width * 0.31,
    // backgroundColor:"blue",
    height: 190,
  },
  View2style: {
    height: "70%",
    //backgroundColor:"red",
    borderRadius: 8,
  },
  View3style: {
    height: "30%",
    //backgroundColor:"green",
    justifyContent: "space-evenly",
  },
  imagestyle: {
    height: 133,
    width: 116.5,
    resizeMode: "stretch",
    borderRadius:10
  },
});

export default SmallImageBox;
