import React, { useContext, useState, useEffect } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  EvilIcons,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./Account";
import Wishlist from "./Wishlist";
import History from "./History";
import Wishlisit_history from "../navigation/wishlisit_history";
import Modal from "react-native-modal";
import Cart from "../MyCart/Cart";
import ModalSignin from "./ModalSignin";
import { auth } from "../../firebaseConfig";
import { UserContext } from "../../Usercontext";

const Stack = createNativeStackNavigator();

function MainAccount(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const currentUser = auth.currentUser;
  const { userProfile, loading } = useContext(UserContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name);
    }
  }, [userProfile]);

  const toggleMenu = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.View1style}>
      <View style={styles.View2style}>
          {currentUser ? (
        <Pressable onPress={() =>console.log("Hello")}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
        </Pressable>
          ) : (
            <Pressable onPress={() => toggleMenu()}>

            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Sign in or register
            </Text>
            </Pressable>
          )}

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Pressable
            style={{ width: 40 }}
            onPress={() => {
              navigation.navigate("settings");
            }}
          >
            <AntDesign name="setting" size={24} color="black" />
          </Pressable>
          <Pressable
            style={{ width: 40 }}
            onPress={() => {
              console.log("Alert");
              navigation.navigate("details");
            }}
          >
            <EvilIcons name="bell" size={28} color="black" />
          </Pressable>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleMenu}
        style={styles.modalStyle}
      >
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <ModalSignin toggle={toggleMenu} />
        </SafeAreaView>
      </Modal>
      <ScrollView>
        <View style={styles.View3style}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>My Orders</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-around",
            }}
          >
            <Pressable style={{ width: 50, alignItems: "center" }}>
              <Ionicons name="wallet-outline" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>To Pay</Text>
            </Pressable>
            <Pressable style={{ width: 50, alignItems: "center" }}>
              <FontAwesome name="envelope-open-o" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>To ship</Text>
            </Pressable>
            <Pressable style={{ width: 65, alignItems: "center" }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={30}
                color="black"
              />
              <Text style={{ fontSize: 12 }}> Shipped</Text>
            </Pressable>
            <Pressable style={{ width: 60, alignItems: "center" }}>
              <Feather name="message-circle" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>To review</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.View3style}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Payments & discounts
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <Pressable style={{ width: 50, alignItems: "center" }}>
              <AntDesign name="creditcard" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>Cards</Text>
            </Pressable>
            <Pressable style={{ width: 55, alignItems: "center" }}>
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={30}
                color="black"
              />
              <Text style={{ fontSize: 12 }}>Coupons</Text>
            </Pressable>
            <Pressable style={{ width: 65, alignItems: "center" }}>
              <SimpleLineIcons name="wallet" size={30} color="black" />
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                {" "}
                Shopping credits
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.View3style}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Entertainment</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <Pressable style={{ width: 50, alignItems: "center" }}>
              <SimpleLineIcons
                name="game-controller"
                size={30}
                color="black"
              />
              <Text style={{ fontSize: 12 }}>The Play</Text>
            </Pressable>
            <Pressable style={{ width: 55, alignItems: "center" }}>
              <FontAwesome name="bicycle" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>The race</Text>
            </Pressable>
            <Pressable style={{ width: 75, alignItems: "center" }}>
              <MaterialCommunityIcons
                name="watering-can-outline"
                size={30}
                color="black"
              />
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                Grow to get
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.View3style}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Services</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <Pressable style={{ width: 70, alignItems: "center" }}>
              <FontAwesome5 name="headset" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>Help center</Text>
            </Pressable>
            <Pressable style={{ width: 65, alignItems: "center" }}>
              <FontAwesome name="pencil-square-o" size={30} color="black" />
              <Text style={{ fontSize: 12 }}>Suggestion</Text>
            </Pressable>
            <Pressable style={{ width: 65, alignItems: "center" }}>
              <AntDesign name="questioncircleo" size={30} color="black" />
              <Text style={{ fontSize: 12, textAlign: "center" }}> Q&A</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ height: 250, backgroundColor: "white" }}>
          <NavigationContainer independent={true}>
            <Wishlisit_history />
            <Stack.Navigator>
              <Stack.Screen
                name="wishlist"
                component={Wishlist}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="history"
                component={History}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  View1style: {
    flex: 1,
  },
  View2style: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  View3style: {
    height: Dimensions.get("screen").height * 0.16,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 6,
    padding: 10,
    gap: 10,
  },
  modalStyle: {
    margin: 0,
    justifyContent: "flex-end",
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default MainAccount;
