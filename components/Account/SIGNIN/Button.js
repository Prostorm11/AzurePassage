import React from 'react';
import { TouchableOpacity, View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';



function Buttons({name}) {
    return (
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.elevatedButton}
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.TextStyle}>{name}</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    view:{
    width:"100%",
    flexDirection:"row", 
    justifyContent: "center",
    position:"relative",
    height:"12%",
    marginTop:15,
  
    },
    TextStyle:{
      fontSize:20,
      color:"white"
    },
    
    elevatedButton: {
        backgroundColor: "#A70F0F",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 8, // Add elevation for Android
        shadowColor: "#000", // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
        
      },
})


export default Buttons;