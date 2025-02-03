import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
const primarycolor = "#A51910";

function InputText({ value, setvalue, placeholder }) {
  return (
    <View
      style={{
        borderRadius: 20,
        borderColor: primarycolor,
        borderWidth: 2,
        marginVertical: 10,
      }}
    >
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

const styles = StyleSheet.create({
  TextInputStyle: {
    height: 40,
    //width:Dimensions.get("screen").width*0.9,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default InputText;
