import React from 'react';
import { View,StyleSheet, TextInput, Dimensions } from 'react-native';


function InputText({value,setvalue,placeholder}) {
    

    return (
       <View >
         
            <TextInput
            onChangeText={setvalue}
            value={value}
            style={styles.TextInputStyle}
            placeholder={placeholder}
            placeholderTextColor="black"
            
          />
            

       </View>
    );
}

const styles= StyleSheet.create({
    TextInputStyle:{
    height: 40,
    //width:Dimensions.get("screen").width*0.9,
    padding: 10,
    marginVertical:20,
    marginHorizontal:20,
    borderBottomWidth: 1
    }
})

export default InputText;