import { StyleSheet, SafeAreaView, Image } from "react-native";
import SignIn from "./SIGNIN/SignIn";
import React from "react";
import Signinupnavigate from "@/components/navigation/signinupnavigate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "@/components/Account/SIGNUP/SignUp";
import Logo from "@/components/Account/Logo";

const Stack = createNativeStackNavigator();
export const action = () => {};
export default function Account() {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <Image
        style={{
          alignSelf: "center",
          width: 200,
          height: 100,
          resizeMode: "contain",
          marginBottom: 10,
        }}
        source={require("@/assets/images/smalllogo.png")}
      />
      <Signinupnavigate />
      <Stack.Navigator
        screenOptions={{
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 10,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 10,
              },
            },
          },
        }}
      >
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          screenOptions={{
            transitionSpec: {
              open: {
                animation: "timing",
                config: {
                  duration: 10, // Specify your desired duration for the open transition
                },
              },
              close: {
                animation: "timing",
                config: {
                  duration: 10, 
                },
              },
            },
          }}
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    // flex: 1,
    // justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    // backgroundColor: "white",
    // width:Dimensions.get("screen").width
  },
});
