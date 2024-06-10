import React from 'react';
import { View,Image,StyleSheet, Dimensions } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.view1style}>
        <Image
          source={require("@/assets/images/smalllogo.png")}
          style={styles.logostyle}
        />
      </View>
    );
}

const styles=StyleSheet.create({
    view1style:{
        height: "25%",
        position:"relative",

    },
    logostyle:{
        height:97,
        width:120,
        resizeMode: "contain",
        left:30
    }

})
