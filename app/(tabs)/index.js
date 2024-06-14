import { Image, StyleSheet, Platform, SafeAreaView ,Dimensions,StatusBar,Text, View} from 'react-native';
import React from "react";
import BottomNavigator from '../../components/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import SmallImageBox from '../../components/Homescreen/SmallImageBox';





export default function App() {
  const Myimage = [
    require("@/assets/images/girlshoper.gif"),
    require("@/assets/images/gadgets.gif"),
  ];
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
       <NavigationContainer independent={true}>
        <BottomNavigator></BottomNavigator>
      </NavigationContainer>
     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    height:Dimensions.get("window").height,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  
});
