import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import randomimages from "../../api/randomimages";
import { useNavigation } from "@react-navigation/native";


function Searchbutton() {
  const [text, textchange] = useState("");
  const navigation=useNavigation();

   const filteredProducts = randomimages.filter((randomimages) =>
    randomimages.title.toLowerCase().includes(text.toLowerCase())
  ); 

    function handlesearch(){
     if(text.trim()){ 
       navigation.push("searchresults",{query:text.trim()})
     }
    }
  return (
    <View style={styles.Viewstyle}>
      <Pressable style={styles.pressablestyle}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search Items"
          placeholderTextColor="black"
          value={text}
          onChangeText={(newtext) => textchange(newtext)}
          style={styles.textfieldstyle}
          returnKeyType="search"
          onSubmitEditing={handlesearch}
        />
      </Pressable>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  pressablestyle: {
    borderRadius: 19,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
  },
  Viewstyle:{
    flex:1,
    paddingVertical:10
  
  },
   textfieldstyle: {
    width: "100%",
  },
 
});

export default Searchbutton;
