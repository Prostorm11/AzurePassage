import React, { useRef, useEffect, useState, useContext } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Modal,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Wallpaper from "./Wallpaper";
import SmallImageBox from "./SmallImageBox";
import Superimages from "../../api/Superimages";
import Femalefashion from "../../api/Femalefashion";
import randomimages from "../../api/randomimages";
import TwoDimage from "./TwoDimage";
import Menu from "./Menu";
import Searchbutton from "./searchbutton";
import ModalSignin from "../Account/ModalSignin";
import { auth } from "../../firebaseConfig";
import { UserContext } from "../../Usercontext";
const { width } = Dimensions.get("window");

function Homescreen() {
  const [superImagesData, setSuperImagesData] = useState([]);
  const [femaleFashionData, setFemaleFashionData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userProfile, loading, productsData, Firestoreproducts } =
    useContext(UserContext);
  const [more, setmore] = useState([]);
  const currentUser = auth.currentUser;

  // const Myimage = [
  //   require("@/assets/images/girlshoper.gif"),
  //   require("@/assets/images/gadgets.gif"),
  // ];
  const promos = ["1", "2", "3", "4"];
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  /*  useEffect(()=>{
    const images=[];
    productsData.variant[0].options.map((item,index)=>(
        images.push(item.image)
    ))
    setmore(images)
  },[]) */

  /*  useEffect(() => {
    if (productsData && productsData.length > 0) {
      const images = productsData.map((item) => item.variant[0].options.map(option => option.image)).flat();
      setmore(images);
    }
  }, [productsData]);
 */
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollViewRef.current) {
        let nextIndex = (currentIndex + 1) % promos.length;
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

  useEffect(() => {
    if (currentUser) {
      setIsModalVisible(false);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsModalVisible(true);
      }, 10000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentUser]);

  const closeModal = () => {
    setIsModalVisible(false);
  };
  //console.log(more)
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.View1Style}>
        {/* <Menu></Menu> */}
        <Image
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#A51910",
            borderRadius: 5,
          }}
          source={require("@/assets/images/logow.png")}
        />
        {/* <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          GlamCart
        </Text> */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search Item"
            placeholderTextColor="#000"
          />
        </View>
        {/* <EvilIcons name="bell" size={28} color="black" /> */}
        <Icon name="notifications" size={24} color="#000" />
      </View>
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          pagingEnabled
        >
          {/* <Wallpaper
            picture={"@/assets/Promo/1.png"}
            describe="Want The Best Female Apparel, Come Grab Yours Now!!"
            text1="Shop Smarter"
            text2="Not Harder!"
          /> */}
          <Image
            style={styles.banner}
            source={require("@/assets/Promo/1.png")}
          />
          {/* <Wallpaper
            picture={"Myimage[1]"}
            text1="Essential For"
            text2="Gamers"
            describe={"Grab The Latest And Poweful Gaming Accessories"}
          /> */}
          <Image
            style={styles.banner}
            source={require("@/assets/Promo/2.png")}
          />
          <Image
            style={styles.banner}
            source={require("@/assets/Promo/3.png")}
          />
          <Image
            style={styles.banner}
            source={require("@/assets/Promo/4.png")}
          />
        </ScrollView>

        <TouchableWithoutFeedback>
          <View style={{ margin: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "Pink",
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Super<Text style={{ color: "red" }}>Deals </Text>
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
                  store="superdeals"
                />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{ margin: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {"Sale" + " "}
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
                  store="viva"
                />
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <Text
          backgroundColor="#A51910"
          style={{
            marginLeft: 20,
            textAlign: "center",
            marginRight: 10,
            color: "#fff",
            height: 30,
            fontWeight: "bold",
            width: 120,
            textAlignVertical: "center",
            borderRadius: 20,
          }}
        >
          Recommended For You
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {randomimages.map((item, key) => (
            <TwoDimage
              key={key}
              image={item.image}
              addons={item.addons}
              nprice={item.newprice}
              sold={item.sold}
              title={item.title}
              id={item.id}
              description={item.description}
              more={item.more}
              source={randomimages}
            />
          ))}

          {Firestoreproducts.map((item, key) => (
            <TwoDimage
              key={key}
              image={item.image}
              addons={item.addons}
              nprice={item.newprice}
              sold={item.sold}
              title={item.title}
              id={item.id}
              description={item.description}
              more={item.more}
              source={Firestoreproducts}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <SafeAreaView style={styles.modalOverlay}>
          <ModalSignin toggle={closeModal}></ModalSignin>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  View1Style: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#bbbbc8",
    gap: 10,
    height: "8%",
  },

  banner: {
    width: width - 16,
    height: width * (1 / 1.78),
    margin: 8,
    borderRadius: 25,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderRadius: 20,
    height: "80%",
    borderWidth: 2,
    borderColor: "#A51910",
    alignItems: "center",
    paddingHorizontal: 10,
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
    marginHorizontal: 10,
    gap: 7,
  },
  modalOverlay: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },
});

export default Homescreen;
