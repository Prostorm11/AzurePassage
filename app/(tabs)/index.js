import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Text,
  View,
} from "react-native";
import React from "react";
import BottomNavigator from "../../components/navigation/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Searchresults from "../../components/Homescreen/Searchresults";
import ProductDetails from "../../components/Homescreen/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="bottomnavigator" component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="searchresults" component={Searchresults} options={{headerShown:false}}/>
        <Stack.Screen name="productdetails" component={ProductDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
        
      </NavigationContainer>
      {/* <Searchresults></Searchresults> */}
      {/* <ProductDetails></ProductDetails> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    height: Dimensions.get("window").height,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
