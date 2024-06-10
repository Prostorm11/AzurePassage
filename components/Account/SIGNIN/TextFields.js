import React from 'react';
import { View,StyleSheet, TextInput } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function InputText() {
    const [text,textchange]=React.useState("");
    const [text2,textchange2]=React.useState("");
    return (
       <View style={styles.View1}>
         
            <TextInput
            onChangeText={(text)=>textchange(text)}
            value={text}
            style={styles.TextInputStyle}
            placeholder="Type Email"
            placeholderTextColor="black"
            
          />
          <TextInput
            onChangeText={(text)=>textchange2(text)}
            value={text2}
            secureTextEntry={true}
            style={styles.TextInputStyle}
            placeholder="Type Password"
            placeholderTextColor="black"
            
          />
            

       </View>
    );
}

const styles= StyleSheet.create({
  View1:{
    position:"relative",
    top:"5%",
    width:"100%",
    height:"30%"
  },
    TextInputStyle: {
        height: 40,
        padding: 10,
        margin: 14,
        borderBottomWidth: 1,
        
      },
})

export default InputText;