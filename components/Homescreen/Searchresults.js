import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../../Usercontext";

function Searchresults({ route }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFromFirestore, setIsFromFirestore] = useState(null);

  const { query } = route.params;
  const { userProfile, loading, productsData, Firestoreproducts, language } = useContext(UserContext);

  useEffect(() => {
    const firestoreResults = Firestoreproducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (firestoreResults.length > 0) {
      setIsFromFirestore(true);
      setFilteredProducts(firestoreResults);
    } else {
      const randomImagesResults = randomimages.filter(image =>
        image.title.toLowerCase().includes(query.toLowerCase())
      );
      setIsFromFirestore(false);
      setFilteredProducts(randomImagesResults);
    }
  }, [query, Firestoreproducts, randomimages]);

  return (
    <View style={styles.View1style}>
      <Searchtab />

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
              description={item.description}
              more={item.more}
              source={isFromFirestore ? Firestoreproducts : randomimages}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  View1style: {
    flex: 1,
  },
});

export default Searchresults;
