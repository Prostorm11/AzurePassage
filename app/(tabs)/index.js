import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import BottomNavigator from "../../components/navigation/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Searchresults from "../../components/Homescreen/Searchresults";
import ProductDetails from "../../components/Homescreen/ProductDetails";
import SuperDeals from "../../components/Homescreen/SuperDeals";
import Viva from "../../components/Homescreen/Viva";
import Account from "../../components/Account/Account";


const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar 
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={scheme === 'dark' ? 'black' : 'white'} 
      />
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="bottomnavigator" component={BottomNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="searchresults" component={Searchresults} options={{ headerShown: false }} />
          <Stack.Screen name="productdetails" component={ProductDetails} options={{ headerShown: false }} />
          <Stack.Screen name="superdeals" component={SuperDeals} options={{ headerShown: false }} />
          <Stack.Screen name="viva" component={Viva} options={{ headerShown: false }} />
          <Stack.Screen name="user" component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "white",
  },
});
