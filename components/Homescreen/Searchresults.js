import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TwoDimage from "./TwoDimage";
import randomimages from "../../api/randomimages";
import Searchtab from "./searchtab";

function Searchresults({route}) {
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {query}=route.params;
  

  useEffect(() => {
    const results = randomimages.filter(randomimages =>
      randomimages.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query]);

  return (
    <View style={styles.View1style}>
    
      <Searchtab ></Searchtab>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text
          style={{ color: "red", marginHorizontal: 15, fontWeight: "bold" }}
        >
          Best Matches
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {filteredProducts.map((item, index) => (
            <TwoDimage
              key={index}
              image={item.image}
              addons={item.addons}
              nprice={item.newprice}
              sold={item.sold}
              title={item.title}
              id={item.id}
              more={item.more}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  View1style: {
    //backgroundColor: "red",
    flex: 1,
  },
});
export default Searchresults;
