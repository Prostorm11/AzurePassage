import {
  Alert,
  Button,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import InputText from "@/components/Account/TextFields";
import Buttons from "@/components/Account/Button";
import { firestore, auth } from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const primarycolor = "#A51910";

export default function SignIn() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const navigation = useNavigation();
  const [document, setdocument] = useState(null);

  async function Login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      Alert.alert("Success");
      navigation.navigate("bottomnavigator");
    } catch (e) {
      Alert.alert(`failed ${e}`);
      navigation.navigate("user");
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.View1}
    >
      <InputText placeholder="Type Email" value={email} setvalue={setemail} />
      <InputText
        placeholder="Type Password"
        value={password}
        setvalue={setpassword}
      />
      <Text
        style={{ color: primarycolor, alignSelf: "flex-end", marginRight: 15 }}
      >
        Forgot Password?
      </Text>

      {/* <Buttons name="Login" operation={Login} /> */}
      <TouchableOpacity onPress={Login}>
        <Text
          style={{
            borderRadius: 20,
            backgroundColor: primarycolor,
            height: 50,
            fontSize: 20,
            margin: 10,
            // width: 150,
            color: "#ffff",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <Text
          style={{
            borderRadius: 20,
            backgroundColor: primarycolor,
            height: 50,
            margin: 10,

            fontSize: 20,
            width: 150,
            color: "#ffff",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          Forgot Password
        </Text>
      </TouchableOpacity> */}

      {/* <Buttons name="Forgot Password?" /> */}

      <View style={styles.View2}>
        <Text style={styles.text1}>Or signin using?</Text>
        <View style={styles.View3}>
          <Image
            style={styles.google}
            source={require("@/assets/images/googlesmall.png")}
          />
        </View>
        <View style={styles.View4}>
          <Image
            source={require("@/assets/images/Facebook.png")}
            style={styles.facebook}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  View1: {
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  View2: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    position: "relative",
    width: "100%",
    height: 180,
  },
  View3: {
    height: 35,
    width: 35,
  },
  text1: {
    position: "absolute",
    top: "25%",
  },
  View4: {
    height: 35,
    width: 35,
  },
  google: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  facebook: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});
