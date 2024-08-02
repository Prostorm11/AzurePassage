import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import randomimages from "../../api/randomimages";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

function Searchbutton({ value = "", init = null }) {
  const [searchtext, textchange] = useState("");
  const navigation = useNavigation();

  const filteredProducts = randomimages.filter((randomimages) =>
    randomimages.title.toLowerCase().includes(searchtext.toLowerCase())
  );
  useEffect(() => {
    if (value !== "" && value !== searchtext) {
      textchange(value);
      navigation.push("searchresults", { text: value.trim() });
    }
  }, [value, searchtext, navigation]);

  function handlesearch() {
    // if (text.trim()) {
    navigation.push("searchresults", { text: searchtext.trim() });
    textchange("");
    // }
  }
  return (
    <View style={styles.Viewstyle}>
      <Pressable style={styles.pressablestyle}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          placeholder={init ? init : "Search Items"}
          placeholderTextColor="black"
          value={searchtext}
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
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#A51910",
    marginVertical: 3,
  },
  Viewstyle: {
    flex: 1,
    height: "100%",
    //marginVertical:10
  },
  textfieldstyle: {
    width: "100%",
  },
});

export default Searchbutton;
