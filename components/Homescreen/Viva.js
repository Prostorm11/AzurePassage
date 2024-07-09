import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Viva(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.View2style}>
        <Pressable onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 30,
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <FontAwesome6 name="less-than" size={14} color="black" />
          </View>
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Viva</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View2style: {
    height: Dimensions.get("screen").height * 0.1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
  },
  Viewscroll1: {

  },
});

export default Viva;
