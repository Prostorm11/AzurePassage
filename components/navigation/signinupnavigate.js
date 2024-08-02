// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Platform,
// } from "react-native";

// function Signinupnavigate() {
//   const navigation = useNavigation();
//   const [isUnderlined, setisUnderlined] = useState(true);
//   const [isUnderlined2, setisUnderlined2] = useState(false);

//   function underline1() {
//     if (isUnderlined == false && isUnderlined2 == true) {
//       setisUnderlined(!isUnderlined);
//       setisUnderlined2(!isUnderlined2);
//     } else {
//       setisUnderlined(isUnderlined);
//     }
//   }
//   function underline2() {
//     if (isUnderlined2 == false && isUnderlined == true) {
//       setisUnderlined2(!isUnderlined2);
//       setisUnderlined(!isUnderlined);
//     } else {
//       setisUnderlined2(isUnderlined2);
//     }
//   }

//   return (
//     <View style={styles.View1}>
//       <TouchableOpacity
//         onPress={() => {
//           underline1();
//           navigation.navigate("Signin");
//         }}
//       >
//         <Text style={[styles.Text1, isUnderlined && styles.Underline]}>
//           Login
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => {
//           underline2();
//           navigation.navigate("Signup");
//         }}
//       >
//         <Text style={[styles.Text1, isUnderlined2 && styles.Underline]}>
//           Sign Up
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   View1: {
//     width: "100%",
//     position: "relative",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//   },
//   Text1: {
//     fontSize: 20,
//   },
//   Underline: {
//     //textDecorationLine: "underline",
//     backgroundColor: "#A51910",
//     color: "white",
//   },
// });
// export default Signinupnavigate;

import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import SignIn from "../Account/SIGNIN/SignIn";
import SignUp from "../Account/SIGNUP/SignUp";
import PagerView from "react-native-pager-view";

const primarycolor = "#A51910";

function Signinupnavigate() {
  const navigation = useNavigation();

  const [isUnderlined, setisUnderlined] = useState(true);
  const [isUnderlined2, setisUnderlined2] = useState(false);

  function underline1() {
    if (isUnderlined == false && isUnderlined2 == true) {
      setisUnderlined(!isUnderlined);
      setisUnderlined2(!isUnderlined2);
    } else {
      setisUnderlined(isUnderlined);
    }
  }
  function underline2() {
    if (isUnderlined2 == false && isUnderlined == true) {
      setisUnderlined2(!isUnderlined2);
      setisUnderlined(!isUnderlined);
    } else {
      setisUnderlined2(isUnderlined2);
    }
  }
  const scrollToIndex = (index) => {
    // if (ref.current) {
    // ref.current.scrollToIndex({ index, animated: true });
    // }
  };

  return (
    <View style={styles.View1}>
      <TouchableOpacity
        onPress={() => {
          underline1();
          navigation.navigate("Signin");
        }}
      >
        <Text style={[styles.Text1, isUnderlined && styles.Underline]}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          underline2();
          navigation.navigate("Signup");
        }}
      >
        <Text style={[styles.Text1, isUnderlined2 && styles.Underline]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  View1: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Text1: {
    height: 40,
    width: 100,
    textAlign: "center",
    textAlignVertical: "center",
  },
  Underline: {
    backgroundColor: primarycolor,
    color: "#ffff",
    borderRadius: 10,
  },
});
export default Signinupnavigate;
