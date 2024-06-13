import Shop from "../ShopScreen/Shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../Homescreen/Homescreen";
import Account from "../Account/Account";
import Cart from "../MyCart/Cart";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import Feed from "../Feed/feed";

function BottomNavigator() {
  //const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          height: 35,
        },
        tabBarStyle: {
          height: "10%",
        },
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={styles.HomeStyle}
      />

      <Tab.Screen name="Shop" component={Shop} options={styles.ShopStyle} />
      <Tab.Screen name="Feed" component={Feed} options={styles.feedstyle} />
      <Tab.Screen name="Cart" component={Cart} options={styles.MyKart} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={styles.AccountStyle}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  HomeStyle: {
    tabBarLabel: "Home",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Entypo name="home" size={24} color="red" />
      ) : (
        <AntDesign name="home" size={24} color="black" />
      ),
  },
  AccountStyle: {
    tabBarLabel: "Acoount",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <MaterialCommunityIcons name="account-circle" size={24} color="red" />
      ) : (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={24}
          color="black"
        />
      ),
  },
  ShopStyle: {
    tabBarLabel: "Shop",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <MaterialIcons name="manage-search" size={24} color="red" />
      ) : (
        <MaterialIcons name="manage-search" size={24} color="black" />
      ),
  },
  MyKart: {
    tabBarLabel: "Kart",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <AntDesign name="shoppingcart" size={24} color="red" />
      ) : (
        <AntDesign name="shoppingcart" size={24} color="black" />
      ),
  },
  feedstyle:{
    tabBarLabel: "Feed",
    headerShown: false,
    tabBarIcon: ({ focused }) =>
      focused ? (
        <FontAwesome name="feed" size={24} color="red" />
      ) : (
        <FontAwesome name="feed" size={24} color="black" />
      ),
  }
});
export default BottomNavigator;
