import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ListSuperdeals from "../../api/ListSuperdeals";
import useCountdownTimer from "./Timer";

function SuperDeals(props) {
  const navigation = useNavigation();
  const [SearchBarColor, setSearchBarColor] = useState("pink");
  const remainingTime = useCountdownTimer(new Date().getTime(), 20 * 24 * 60 * 60 * 1000); 

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 100) {
      setSearchBarColor("pink");
    } else {
      setSearchBarColor("white");
    }
  };

  const label =
    "https://static.vecteezy.com/system/resources/previews/019/901/879/non_2x/buy-now-sticker-and-badge-with-offer-and-discount-png.png";

  return (
    <View style={{ flex: 1,backgroundColor:"white" }}>
      <View style={[styles.View2style, { backgroundColor: SearchBarColor }]}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <FontAwesome6 name="less-than" size={14} color="black" />
          </View>
        </Pressable>
        <Text style={styles.headerText}>
          Super<Text style={{ color: "red" }}>Deals</Text>
        </Text>
      </View>
      <View style={styles.View3style}>
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          <View style={styles.Viewscroll1}>
            <View style={styles.launchTextContainer}>
              <Text style={styles.launchText}>
                New Launches And Limited Time Deals
              </Text>
            </View>
            <View style={styles.timeImageContainer}>
              <Image
                style={styles.imagestyle}
                source={require("@/assets/images/time.png")}
              />
            </View>
          </View>
          <View style={styles.Viewscroll2}>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center",marginBottom:8}}>
            <Text style={{fontSize:17,fontWeight:"bold"}}>Daily deals</Text>
            <Text style={styles.remainingTimeText}>Ends: {remainingTime}</Text>
          </View>
            {ListSuperdeals.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.push("productdetails", {
                    identity: item.id,
                    describe: item.description,
                    price: item.newprice,
                    more: item.more,
                    source: ListSuperdeals,
                  })
                }
              >
                <View
                  style={{ flexDirection: "row", marginBottom: 2, height: 180 }}
                >
                  <View style={styles.imageview}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        resizeMode: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </View>
                  <View style={styles.productInfoContainer}>
                    <Text style={{ marginVertical: 3 ,fontSize:16,fontWeight:"bold"}}>{item.title}</Text>
                    <View style={styles.priceContainer}>
                      <View>
                        <Text style={{ fontSize: 17 }}>GHS {item.newprice}</Text>
                        <Text style={{color:"red"}}>{item.discount} off</Text>
                      </View>
                      <Image
                        source={{ uri: label }}
                        style={styles.labelImage}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View2style: {
    height: Dimensions.get("screen").height * 0.1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
  },
  Viewscroll1: {
    height: Dimensions.get("screen").height * 0.15,
    backgroundColor: "pink",
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Viewscroll2: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
    marginTop: 5,
  },
  imagestyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  imageview: {
    width: Dimensions.get("screen").width * 0.47,
    height: 180,
  },
  View3style: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("window").height * 0.89,
  },
  backButton: {
    width: 30,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  launchTextContainer: {
    width: "55%",
  },
  launchText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  timeImageContainer: {
    width: "25%",
    height: "100%",
  },
  productInfoContainer: {
    width: Dimensions.get("screen").width * 0.49,
    justifyContent: "space-between",
    padding: 2,
  },
  priceContainer: {
    backgroundColor: "pink",
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    padding: 2,
  },
  labelImage: {
    height: "100%",
    width: 40,
    resizeMode: "contain",
  },
  remainingTimeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    backgroundColor:"black",
    color:"white"
   // width: "100%",
  },
});

export default SuperDeals;
