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
import Settings from "../../components/Account/settings";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Searchresults from "../../components/Homescreen/Searchresults";
import ProductDetails from "../../components/Homescreen/ProductDetails";
import SuperDeals from "../../components/Homescreen/SuperDeals";
import Viva from "../../components/Homescreen/Viva";
import Account from "../../components/Account/Account";
import Displaycredentials from"@/Displaycredentials"
import { UserProvider } from "../../Usercontext";
const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <UserProvider>

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
          <Stack.Screen name="details" component={Displaycredentials} options={{ headerShown: false }} />
          <Stack.Screen name="settings" component={Settings} options={{ headerShown: false }} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "white",
  },
});
