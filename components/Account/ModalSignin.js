import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Account from './Account';
import { useNavigation } from '@react-navigation/native';

function ModalSignin({toggle}) {
    const navigation=useNavigation();
    const size=Dimensions.get("screen").height*0.3
    return (
       <View style={styles.Viewstyle}>
        <View style={styles.view2style}>
        <Pressable onPress={()=>toggle()}>

        <FontAwesome5 name="times" size={24} color="black" />
        </Pressable>
        </View>
        <View style={styles.View3style}>

        <EvilIcons name="user" size={size} color="black" />
        <Text style={{marginVertical:30,fontSize:18,fontWeight:"bold"}}>USER</Text>
        <Pressable style={styles.Pressablestyle} onPress={()=>{navigation.navigate("user"); toggle()}}>
            <Text style={{color:"white",fontWeight:"bold"}}>SignIn/SignUp</Text>
        </Pressable>
        </View>
       </View>
    );
}

const styles=StyleSheet.create({
    Viewstyle:{
        height:Dimensions.get("screen").height,
        
        //justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    view2style:{
        position:"absolute",
        top:0,
        left:10,
        width:"20%",
        height:"20%"
    },
    View3style:{
        top:"15%",
        justifyContent:"center",
        alignItems:"center",
        width:"80%"
    },
    Pressablestyle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"10%",
        backgroundColor:"red",
        borderRadius:20
    }
})
export default ModalSignin;