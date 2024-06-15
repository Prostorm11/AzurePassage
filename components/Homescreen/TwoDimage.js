import React, {useRef} from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import randomimages from "../../api/randomimages";
import Scrollingmessage from "./scrollingmessage";





function TwoDimage({image,nprice,sold,addons}) {
  
  return (
    <TouchableWithoutFeedback >
      <View style={styles.View1style} onStartShouldSetResponder={() => true}>
       <View style={styles.View2style}>
        <Image source={{uri:image}} style={styles.imagestyle}></Image>
      </View>
      <View style={styles.View3style}>
        <Text>{randomimages[0].title}</Text>
        <View style={{ flexDirection: "row", gap: 10 ,alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"bold"}}>GHC {nprice}</Text>
          <Text style={{fontSize:12}}>{sold} sold</Text>
        </View>
        {addons && <Scrollingmessage height={15} />}

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
