import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputText from "@/components/Account/TextFields";
import Buttons from "@/components/Account/Button";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function SignIn() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  return (
    <View style={styles.View1}>
      
      <InputText placeholder="Type Email" value={email} setvalue={setemail}/>
      <InputText placeholder="Type Password" value={password} setvalue={setpassword}/>
     
      <Buttons name="Login" />
      <Buttons name="Forgot Password?"/>
      
      <View style={styles.View2}>
        <Text style={styles.text1} >Or signin using?</Text>
        <View style={styles.View3}>
            <Image style={styles.google}source={require("@/assets/images/googlesmall.png")}/>
        </View>
        <View style={styles.View4}>
            <Image source={require("@/assets/images/Facebook.png")}style={styles.facebook} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View1: {
    backgroundColor:"white",
    height:"100%"
    
  },
  View2: {
    marginTop: 20,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    gap:10,
    position:"relative",
    width:"100%",
    height:180,

  },
  View3:{
    height:35,
    width:35
  },
  text1:{
    position:"absolute",
    top:"25%",

    
  },
  View4:{
    height:35,
    width:35
  },
  google:{
    width:35,
    height:35,
    resizeMode:"contain"
  },
  facebook:{
    width:35,
    height:35,
    resizeMode:"contain"
  }
});
