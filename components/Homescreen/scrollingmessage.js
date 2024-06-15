import React, { useRef, useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View, Animated } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import randomimages from "../../api/randomimages";

const messages = [
  {text:"Free Shipping",
    icon:<FontAwesome name="ship" size={11} color="red" />
  },
  {text:"Top-Selling",
    icon:<Ionicons name="flame" size={11} color="red" />
  },
  {text:"Limited Time Offer",
    icon:<Entypo name="time-slot" size={11} color="red" />
  },
  
];

const Scrollingmessage = ({ height }) => {
  const scrollViewRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      let offset = Math.floor(scrollY._value / height) * height + height;
      if (offset >= height * messages.length) {
        offset = 0;
      }
      scrollViewRef.current.scrollTo({ y: offset, animated: true });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [scrollY, height]);

  return (
    <View style={[styles.container, { height }]}>
      <ScrollView
        ref={scrollViewRef}
        vertical
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {messages.map((message, index) => (
          <View key={index} style={[styles.slide, { height }]}>
            {message.icon}
            <Text style={styles.text}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
   
  },
  slide: {
    //justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection:"row",
    alignItems:"center"

    //color:"red"
    //padding: 10,
  },
  text: {
    fontSize: 12,
    color:"red"
   
  },
});

export default Scrollingmessage;
