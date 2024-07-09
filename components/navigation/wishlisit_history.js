import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";

function Wishlisit_history(props) {
    const navigation =useNavigation()
  const [isUnderlined, setisUnderlined] = useState(true);
  const [isUnderlined2, setisUnderlined2] = useState(false);

  function underline1(){
    if(isUnderlined==false && isUnderlined2==true){
      setisUnderlined(!isUnderlined)
      setisUnderlined2(!isUnderlined2)
    }
    else{
      setisUnderlined(isUnderlined)
    }
  }
  function underline2(){
    if(isUnderlined2==false && isUnderlined==true){
      setisUnderlined2(!isUnderlined2)
      setisUnderlined(!isUnderlined)
    }
    else{
      setisUnderlined2(isUnderlined2)
    }
  }
  
  return (
    <View style={styles.View1}>
      <TouchableOpacity
        onPress={() => { 
          underline1()
          navigation.navigate("wishlist")
        }}
      >
        <Text style={[styles.Text1, isUnderlined && styles.Underline]}>
          Wishlist
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
         underline2()
          navigation.navigate("history")
        }}
      >
        <Text style={[styles.Text1, isUnderlined2 && styles.Underline]}>
           History
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    View1: {
      width: "50%",
      position: "relative",
      flexDirection: "row",
      justifyContent: "space-evenly",
     
    },
    Text1: {
      fontSize: 20,
    },
    Underline: {
      textDecorationLine: "underline",
    },
  });
export default Wishlisit_history;