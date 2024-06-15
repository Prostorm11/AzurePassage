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
import TwoDimage from "../../components/Homescreen/TwoDimage";
import Scrollingmessage from "../../components/Homescreen/scrollingmessage";
import randomimages from "../../api/randomimages";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
             <NavigationContainer independent={true}>
        <BottomNavigator></BottomNavigator>
      </NavigationContainer>
      {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TwoDimage image={randomimages[0].image} addons={randomimages[0].addons}></TwoDimage>
        <TwoDimage image={randomimages[1].image} addons={randomimages[1].addons}></TwoDimage>
        
      </View> */}
      {/* <Scrollingmessage height={100}></Scrollingmessage> */}
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
