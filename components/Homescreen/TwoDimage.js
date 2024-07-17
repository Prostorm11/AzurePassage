import React, {useRef} from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import randomimages from "../../api/randomimages";
import Scrollingmessage from "./scrollingmessage";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";






function TwoDimage({image,nprice,sold,addons,title,id,description,more,source}) {
  const navigation=useNavigation();
  

  return (
    <TouchableWithoutFeedback onPress={function(){navigation.navigate("productdetails",{identity:id,sold:sold,price:nprice,describe:description,more:more,source:source})}}>
      <View style={styles.View1style} onStartShouldSetResponder={() => true}>
       <View style={styles.View2style}>
        <Image source={{uri:image}} style={styles.imagestyle}></Image>
      </View>
      <View style={styles.View3style}>
        <Text numberOfLines={1}>{title}</Text>
        <View style={{ flexDirection: "row", gap: 10 ,alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"bold"}}>GHC {nprice}</Text>
          <Text style={{fontSize:12}}>{sold} sold</Text>
        </View>
        {addons && <Scrollingmessage height={20} />}

      </View>
      
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  View1style: {
    width: Dimensions.get("screen").width * 0.47,
    //backgroundColor:"blue",
    height: 210,
    margin: 5,
  },
  View2style: {
    height: "70%",
    backgroundColor: "red",
    borderRadius: 8,
  },
  View3style: {
    height: "30%",
    //backgroundColor:"green",
    justifyContent: "space-evenly",
  },
  imagestyle: {
    height: 147,
    width: 176.5,
    resizeMode: "cover",
  },
});
export default TwoDimage;
