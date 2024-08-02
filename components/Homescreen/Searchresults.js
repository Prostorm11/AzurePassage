// import React, { useContext, useEffect, useState } from "react";
// import {
//   Dimensions,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import TwoDimage from "./TwoDimage";
// import randomimages from "../../api/randomimages";
// import Searchtab from "./searchtab";
// import { UserContext } from "../../Usercontext";
// import {
//   getFirestore,
//   collection,
//   where,
//   limit,
//   doc,
//   getDocs,
// } from "firebase/firestore";

// function Searchresults({ route }) {
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isFromFirestore, setIsFromFirestore] = useState(null);

//   const { query } = route.params;
//   const { userProfile, loading, productsData, Firestoreproducts, language } =
//     useContext(UserContext);

//   useEffect(() => {
//     getresult();
//   }, [query, Firestoreproducts, randomimages]);

//   const getresult = async () => {
//     // const firestoreResults = Firestoreproducts.filter((product) =>
//     //   product.title.toLowerCase().includes(query.toLowerCase())
//     // );

//     try {
//       const firestore = getFirestore();

//       const catquery = query(
//         collection(firestore, "Products"),
//         where("category", "==", query),
//         limit(10)
//       );

//       const subcategoryQuery = query(
//         collection(firestore, "Products"),
//         where("subcategory", "==", query),
//         limit(10)
//       );

//       const [catSnapshot, subcatSnapshot] = await Promise.all([
//         getDocs(catquery),
//         getDocs(subcategoryQuery),
//       ]);

//       const catDocuments = catSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       const subDocuments = subcatSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       const combinedDocuments = [...catDocuments, ...subDocuments];
//       setIsFromFirestore(true);
//       setFilteredProducts(combinedDocuments);
//     } catch (error) {}
//     // if (firestoreResults.length > 0) {
//     //   setIsFromFirestore(true);
//     //   setFilteredProducts(firestoreResults);
//     // } else {
//     //   const randomImagesResults = randomimages.filter((image) =>
//     //     image.title.toLowerCase().includes(query.toLowerCase())
//     //   );
//     //   setIsFromFirestore(false);
//     //   setFilteredProducts(randomImagesResults);
//     // }
//   };
//   return (
//     <View style={styles.View1style}>
//       <Searchtab init={query} />

//       <ScrollView showsHorizontalScrollIndicator={false}>
//         <Text
//           style={{ color: "red", marginHorizontal: 15, fontWeight: "bold" }}
//         >
//           Best Matches
//         </Text>
//         <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//           {filteredProducts.map((item, index) => (
//             <TwoDimage
//               key={index}
//               image={item.image}
//               addons={item.addons}
//               nprice={item.newprice}
//               sold={item.sold}
//               title={item.title}
//               id={item.id}
//               description={item.description}
//               more={item.more}
//               source={isFromFirestore ? Firestoreproducts : randomimages}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   View1style: {
//     flex: 1,
//   },
// });

// export default Searchresults;

// import React, { useContext, useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import TwoDimage from "./TwoDimage";
// import randomimages from "../../api/randomimages";
// import Searchtab from "./searchtab";
// import { UserContext } from "../../Usercontext";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   query,
//   limit,
// } from "firebase/firestore";

// function Searchresults({ route }) {
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isFromFirestore, setIsFromFirestore] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { text } = route.params;
//   const { userProfile, productsData, Firestoreproducts, language } =
//     useContext(UserContext);

//   useEffect(() => {
//     getresult;
//   }, [text, Firestoreproducts, randomimages]);

//   const getresult = async () => {
//     let list = [];
//     try {
//       const firestore = getFirestore();

//       const initialQuery = query(
//         collection(firestore, "Products"),
//         orderBy("name"),
//         limit(6)
//       );

//       const snapshot = await getDocs(initialQuery);

//       for (const document of snapshot.docs) {
//         if (
//           document.data().name.includes(text) ||
//           document.data().description.includes(text) ||
//           document.data().category.includes(text) ||
//           document.data().subcategory.includes(text)
//         ) {
//           list.push(document);
//         }
//       }

//       setIsFromFirestore(true);
//       let finaldocumnets = [...filteredProducts, ...list];
//       setFilteredProducts(finaldocumnets);
//     } catch (error) {
//       setIsFromFirestore(false);

//       console.log("Random");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.View1style}>
//       <Searchtab init={text} />
//       {loading ? (
//         <ActivityIndicator size="large" color="#A51910" />
//       ) : (
//         <ScrollView showsHorizontalScrollIndicator={false}>
//           <Text
//             style={{ color: "red", marginHorizontal: 15, fontWeight: "bold" }}
//           >
//             Best Matches
//           </Text>
//           <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//             {filteredProducts.map((item, index) => (
//               <TwoDimage
//                 key={index}
//                 image={item.image}
//                 addons={item.addons}
//                 nprice={item.newprice}
//                 sold={item.sold}
//                 title={item.title}
//                 id={item.id}
//                 description={item.description}
//                 more={item.more}
//                 source={isFromFirestore ? Firestoreproducts : randomimages}
//               />
//             ))}
//           </View>
//         </ScrollView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   View1style: {
//     flex: 1,
//   },
// });

// export default Searchresults;

import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TwoDimage from "./TwoDimage";
import randomimages from "../../api/randomimages";
import Searchtab from "./searchtab";
import { UserContext } from "../../Usercontext";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import ItemTile from "../ShopScreen/itemTile";

function Searchresults({ route }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFromFirestore, setIsFromFirestore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const { text } = route.params;
  const { userProfile, productsData, Firestoreproducts, language } =
    useContext(UserContext);

  useEffect(() => {
    getresult();
  }, [text, Firestoreproducts, randomimages]);

  const getresult = async () => {
    setLoading(true);
    let list = [];
    try {
      const firestore = getFirestore();

      const initialQuery = query(
        collection(firestore, "Products"),
        orderBy("name"),
        limit(6)
      );

      const snapshot = await getDocs(initialQuery);
      const lastVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);
      console.log(text);
      for (const document of snapshot.docs) {
        if (
          document.data().name.toLowerCase().includes(text) ||
          document.data().description.toLowerCase().includes(text) ||
          document.data().category.toLowerCase().includes(text) ||
          document.data().subcategory.toLowerCase().includes(text)
        ) {
          console.log(document.data());

          list.push(document.data());
        }
      }

      setIsFromFirestore(true);
      setFilteredProducts(list);
      console.log(list);
    } catch (error) {
      setIsFromFirestore(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (!lastVisible || loadingMore) return;
    setLoadingMore(true);
    let list = [];
    try {
      const firestore = getFirestore();

      const nextQuery = query(
        collection(firestore, "Products"),
        // orderBy("name"),
        startAfter(lastVisible),
        limit(6)
      );

      const snapshot = await getDocs(nextQuery);
      const lastVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);

      for (const document of snapshot.docs) {
        if (
          document.data().name.includes(text) ||
          document.data().description.includes(text) ||
          document.data().category.includes(text) ||
          document.data().subcategory.includes(text)
        ) {
          list.push(document.data());
        }
      }

      setFilteredProducts((prevProducts) => [...prevProducts, ...list]);
    } catch (error) {
      console.log("Random");
    } finally {
      setLoadingMore(false);
    }
  };

  const renderFooter = () => {
    return loadingMore ? (
      <View style={styles.loadingMoreContainer}>
        <ActivityIndicator size="small" color="#A51910" />
      </View>
    ) : null;
  };
  // const handleScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
  //   const isCloseToBottom =
  //     layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
  //   if (isCloseToBottom) {
  //     loadMore();
  //   }
  // };

  return (
    <View style={styles.View1style}>
      <Searchtab init={text} />
      {loading ? (
        <ActivityIndicator size="large" color="#A51910" />
      ) : (
        // <ScrollView
        //   showsHorizontalScrollIndicator={false}
        //   onScroll={({ nativeEvent }) => handleScroll(nativeEvent)}
        //   scrollEventThrottle={400}
        // >
        //   <Text
        //     style={{ color: "red", marginHorizontal: 15, fontWeight: "bold" }}
        //   >
        //     Best Matches
        //   </Text>
        //   <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        //     {filteredProducts.map((item, index) => (
        //       <TwoDimage
        //         key={index}
        //         image={item.image}
        //         addons={item.addons}
        //         nprice={item.newprice}
        //         sold={item.sold}
        //         title={item.title}
        //         id={item.id}
        //         description={item.description}
        //         more={item.more}
        //         source={isFromFirestore ? Firestoreproducts : randomimages}
        //       />
        //     ))}
        //   </View>
        //   {loadingMore && <ActivityIndicator size="small" color="#A51910" />}
        // </ScrollView>

        <FlatList
          data={filteredProducts}
          numColumns={2}
          // scrollEnabled={false}
          renderItem={({ item }) => <ItemTile item={item} />}
          keyExtractor={(item, index) => index}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  View1style: {
    flex: 1,
  },
});

export default Searchresults;
