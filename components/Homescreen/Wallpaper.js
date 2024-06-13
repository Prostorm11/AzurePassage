import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function Wallpaper({picture,text1,text2,describe}) {
  return (
    <View style={styles.View1style}>
      <View style={styles.View2style}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>{text1}</Text>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>{text2}</Text>
        <Text style={{ fontSize: 14 }}>
          {describe}
        </Text>

        <TouchableOpacity
          style={styles.elevatedButton}
          onPress={() => console.log("Pressed")}
        >
        <View style={{flexDirection:"row"}}>
        <Text style={styles.TextStyle}>Explore</Text>
        <AntDesign name="arrowright" size={24} color="white" />
        </View>
         
        </TouchableOpacity>
      </View>
      <View style={styles.View3style}>
        <Image
          source={picture}
          style={styles.girlshopimage}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View1style: {
    backgroundColor: "#bbbbc8",
    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    width:Dimensions.get("screen").width
  },
  View2style: {
    height: "80%",
    width: "55%",
    //backgroundColor:"red"
  },
  View3style: {
    height: "70%",
    width: "45%",
    // backgroundColor:"white"
  },
  girlshopimage: {
    resizeMode: "stretch",
    height: 185,
    width: 159.5,
    //backgroundColor:"gray"
  },
  TextStyle:{
    fontSize:20,
    color:"white"
  },
  elevatedButton: {
        backgroundColor: "#A70F0F",
       // paddingVertical: 5,
        //paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 8, // Add elevation for Android
        shadowColor: "#000", // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginVertical:20,
        alignItems:"center",
        marginRight:25,
        width:125
  }
});

export default Wallpaper;
