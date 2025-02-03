import {
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Text,
  View,
} from "react-native";
import SignIn from "./SIGNIN/SignIn";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Signinupnavigate from "@/components/navigation/signinupnavigate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "@/components/Account/SIGNUP/SignUp";
import Logo from "@/components/Account/Logo";

const Stack = createNativeStackNavigator();
export default function Account() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.SafeAreaViewStyle}
    >
      {/* <Logo /> */}
      <Image
        source={require("@/assets/images/smalllogo.png")}
        style={{
          width: "60%",
          height: "20%",
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      />

      <Signinupnavigate />
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: "#ffff",
    // width:Dimensions.get("screen").width
  },
});
