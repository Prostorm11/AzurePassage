import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../Usercontext";

function MainProfile(props) {
  const navigation = useNavigation();
  const { userProfile, loading } = useContext(UserContext);
  return (
    <SafeAreaView style={styles.safestyle}>
      <View
        style={{
          marginHorizontal: 10,
          width: 50,
          position: "absolute",
          left: 0,
        }}
      >
        <Pressable onPress={() => navigation.goBack()} style={{ width: 50 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      </View>
      <Text style={styles.header}>Profile</Text>

      <Pressable style={styles.view1style} onPress={() => navigation.navigate("profile")}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 35,
              backgroundColor: "#FF3500",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 30, color: "white" }}>
              {userProfile.name[0]}
            </Text>
          </View>
          <Text
            style={{ margin: 10, fontWeight: "400", fontSize: 22 }}
            numberOfLines={1}
          >
            {userProfile.name}
          </Text>
        </View>
        <View
          style={styles.pressablestyle}
          
        >
          <Text>Edit</Text>
        </View>
      </Pressable>
      <Pressable style={styles.view2style} onPress={() => navigation.navigate("address")}>
            <Text style={{fontSize:16,fontWeight:"bold"}}>My Address</Text>
            <View style={{backgroundColor:"#D3D3D3",height:40,justifyContent:"center",alignItems:"center",borderRadius:15}}>
                <Text style={{fontSize:12,color:"gray"}}>For a faster checkout experience add your address</Text>
            </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safestyle: {
    flex: 1,
    margin: 10,
    
  },

  header: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
  },
  view1style: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressablestyle: {
    height: 32,
    width: 90,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  view2style: {
    margin: 15,
    justifyContent: "space-between",
    height:75
  },
});
export default MainProfile;
