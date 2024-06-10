import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";




function Signinupnavigate() {
 const navigation =useNavigation()
  const [isUnderlined, setisUnderlined] = useState(true);
  const [isUnderlined2, setisUnderlined2] = useState(false);
  
  return (
    <View style={styles.View1}>
      <TouchableOpacity
        onPress={() => { 
          setisUnderlined(!isUnderlined);
          setisUnderlined2(!isUnderlined2);
          navigation.navigate("Signin")
        }}
      >
        <Text style={[styles.Text1, isUnderlined && styles.Underline]}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setisUnderlined2(!isUnderlined2);
          setisUnderlined(!isUnderlined);
          navigation.navigate("Signup")
        }}
      >
        <Text style={[styles.Text1, isUnderlined2 && styles.Underline]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  View1: {
    width: "100%",
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
export default Signinupnavigate;
