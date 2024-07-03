import React from 'react';
import { StyleSheet,View,Pressable, Dimensions } from 'react-native';
import Searchbutton from './searchbutton';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';



function Searchtab(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.View1style}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>

        <Searchbutton></Searchbutton>
      </View>
    );
}
const styles= StyleSheet.create({
    View1style: {
    height: Dimensions.get("screen").height * 0.08,
    backgroundColor: "#bbbbc8",
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 5,
    marginBottom:3
  },
})
export default Searchtab;