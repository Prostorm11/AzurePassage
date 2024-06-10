import { Image, StyleSheet, Platform, SafeAreaView ,Dimensions,StatusBar,Text, View} from 'react-native';
import React from "react";
import BottomNavigator from '../../components/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
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
