import React from "react";
import InputText from "../SIGNIN/TextFields";
import { View, StyleSheet, TextInput, Text } from "react-native";
import SigninButton from "../SIGNIN/Button";
function SignUp() {
  const [text, textchange] = React.useState("");
  return (
    <View style={styles.View1}>
      <InputText />
      <TextInput
        onChangeText={textchange}
        value={text}
        style={styles.TextInputStyle}
        placeholder="Type Number"
        placeholderTextColor="black"
      />
      <SigninButton name="SignUp" />
      <View style={{ alignItems: "center",width:"100%" }}>
        <Text style={{fontStyle:"italic"}}>By signing up, you agree to GlamCart's</Text>
        <Text><Text style={{color:"red",fontStyle:"italic"}}>Terms</Text> and <Text style={{color:"red",fontStyle:"italic"}}>Conditions</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View1: {
    backgroundColor: "white",
    height: "100%",
  },
  TextInputStyle: {
    height: 40,
    padding: 10,
    marginTop: 36,
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 14,
    borderBottomWidth: 1,
  },
});

export default SignUp;
