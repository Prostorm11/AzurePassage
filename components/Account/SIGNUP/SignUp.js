import React from "react";
import { View, StyleSheet, Text, Dimensions, Alert, KeyboardAvoidingView, ScrollView,Platform, TouchableOpacity } from "react-native";
import InputText from "@/components/Account/TextFields";
import Buttons from "@/components/Account/Button";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { firestore,auth } from "@/firebaseConfig";


function SignUp() {
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState("");

  const primarycolor = "#A51910";

 

  async function CreateAccount() {
    try {
     
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth,email,password);
      const userId = userCredential.user.uid;
     

      await setDoc(doc(firestore, 'Profiles', userId), {
        userId: userId,
        name: name,
        email: email,
        cart: [],
        ordersMade: [],
        country: country,
        number: number,
        createdAt: serverTimestamp(),
      });

      Alert.alert("Success");
      
    } catch (e) {
      Alert.alert(`Something Went Wrong: ${e.message}`);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.View1}>
          <View style={styles.View2style}>
            <InputText placeholder="Type Name" value={name} setvalue={setName} />
            <InputText placeholder="Type Email" value={email} setvalue={setEmail} />
            <InputText
              placeholder="Type Password"
              value={password}
              setvalue={setPassword}
              secureTextEntry
            />
            <InputText placeholder="Type Number" value={number} setvalue={setNumber} />
            <InputText placeholder="Type Country" value={country} setvalue={setCountry} />
          </View>

          <TouchableOpacity onPress={CreateAccount}>
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
          <View style={{ alignItems: "center", width: "100%" }}>
            <Text style={{ fontStyle: "italic" }}>
              By signing up, you agree to GlamCart's
            </Text>
            <Text>
              <Text style={{ color: "red", fontStyle: "italic" }}>Terms</Text> and{" "}
              <Text style={{ color: "red", fontStyle: "italic" }}>Conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  View1: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    padding: 16,
  },
  View2style: {
    width: "100%",
  },
});

export default SignUp;
