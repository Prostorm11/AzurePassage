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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Searchresults from "../../components/Homescreen/Searchresults";
import ProductDetails from "../../components/Homescreen/ProductDetails";
import SuperDeals from "../../components/Homescreen/SuperDeals";
import Viva from "../../components/Homescreen/Viva";
import Account from "../../components/Account/Account";
import Displaycredentials from "@/Displaycredentials";
import { UserProvider } from "../../Usercontext";
import CurrencySelectionScreen from "../../components/Account/Mysettings/CurrencySelectionScreen";
import AddressScreen from "../../components/Account/Mysettings/AddressScreen";
import AppImageQualityScreen from "../../components/Account/Mysettings/AppImageQualityScreen";
import LanguageSelectionScreen from "../../components/Account/Mysettings/LanguageSelectionScreen";
import NotificationScreen from "../../components/Account/Mysettings/NotificationScreen";
import ProfileScreen from "../../components/Account/Mysettings/ProfileScreen";
import RateAliExpressScreen from "../../components/Account/Mysettings/RateAliExpressScreen";
import ViewedScreen from "../../components/Account/Mysettings/ViewedScreen";
import FullScreenVideoPlayer from "../../components/Feed/Videoplayer";
import MainProfile from "../../components/Account/MainProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <UserProvider>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar
          barStyle={scheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={scheme === "dark" ? "black" : "white"}
        />
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="user">
            <Stack.Screen
              name="bottomnavigator"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="searchresults"
              component={Searchresults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="productdetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="superdeals"
              component={SuperDeals}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="viva"
              component={Viva}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="user"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="details"
              component={Displaycredentials}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="address"
              component={AddressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="imagequality"
              component={AppImageQualityScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="currency"
              component={CurrencySelectionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="notifications"
              component={NotificationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="rate"
              component={RateAliExpressScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="viewed"
              component={ViewedScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="language"
              component={LanguageSelectionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="videoplayer"
              component={FullScreenVideoPlayer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="mainprofile"
              component={MainProfile}
              options={{ headerShown: false }}
            />
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
