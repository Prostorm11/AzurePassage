import React, { useRef, useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Wallpaper from "./Wallpaper";
import SmallImageBox from "./SmallImageBox";
import Superimages from "../../api/Superimages";
import Femalefashion from "../../api/Femalefashion";

function Homescreen() {
  const [text, textchange] = useState("");
  const [superImagesData, setSuperImagesData] = useState([]);
  const [femaleFashionData, setFemaleFashionData] = useState([]);
  
  const Myimage = [
    require("@/assets/images/girlshoper.gif"),
    require("@/assets/images/gadgets.gif"),
  ];

  const scrollViewRef = useRef(null);
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollViewRef.current) {
        let nextIndex = (currentIndex + 1) % Myimage.length;
        setCurrentIndex(nextIndex);
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      }
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [currentIndex, width]);

  useEffect(() => {
    const generateProductData = (images) => {
      return images.map((item) => ({
        image: item,
        price: parseFloat(Math.random() * (200 - 100) + 100).toFixed(2),
        sold: Math.floor(Math.random() * (200 - 100) + 100),
        rate: parseFloat(Math.random() * (5 - 3) + 3).toFixed(1),
      }));
    };

    setSuperImagesData(generateProductData(Superimages));
    setFemaleFashionData(generateProductData(Femalefashion));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.View1Style}>
        <Entypo name="menu" size={28} color="black" />
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          GlamCart
        </Text>
        <Pressable style={styles.pressablestyle}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            placeholder="Search Items"
            placeholderTextColor="black"
            value={text}
            onChangeText={(newtext) => textchange(newtext)}
            style={styles.textfieldstyle}
          />
        </Pressable>
        <EvilIcons name="bell" size={28} color="black" />
      </View>
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          pagingEnabled
        >
          <Wallpaper
            picture={Myimage[0]}
            describe="Want The Best Female Apparel, Come Grab Yours Now!!"
            text1="Shop Smarter"
            text2="Not Harder!"
          />
          <Wallpaper
            picture={Myimage[1]}
            text1="Essential For"
            text2="Gamers"
            describe={"Grab The Latest And Poweful Gaming Accessories"}
          />
        </ScrollView>
        <TouchableWithoutFeedback>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "Pink",
                  fontSize: 18,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Super<Text style={{ color: "red" }}>Deals</Text>
              </Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </View>
            <Text>Limited-time-offers</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.imageContainer}
              showsHorizontalScrollIndicator={false}
            >
              {superImagesData.map((item, index) => (
                <SmallImageBox
                  key={index}
                  image={{ uri: item.image }}
                  price={item.price}
                  sold={item.sold}
                  rate={item.rate}
                />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "Pink",
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Viva<Text style={{ color: "red" }}></Text>
              </Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </View>
            <Text>Your fashion choice</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.imageContainer}
              showsHorizontalScrollIndicator={false}
            >
              {femaleFashionData.map((item, index) => (
                <SmallImageBox
                  key={index}
                  image={{ uri: item.image }}
                  price={item.price}
                  sold={item.sold}
                  rate={item.rate}
                />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  View1Style: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bbbbc8",
    gap: 10,
    height: "8%",
  },
  pressablestyle: {
    borderRadius: 19,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
    height: 32,
    width: 20,
  },
  textfieldstyle: {
    width: "100%",
  },
  view2style: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#bbbbc8",
    height: "40%",
  },
  imageContainer: {
    marginTop: 10,
    gap: 7,
  },
});

export default Homescreen;
