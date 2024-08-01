import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import ItemTile from "./itemTile";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [currentindex, setCurrentIndex] = useState(0);
  const [sellingType, setSellingType] = useState("Top Selling");
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getCategoriesFromFirestore();
  }, []);

  const getCategoriesFromFirestore = async () => {
    setLoading(true);
    try {
      const firestore = getFirestore();
      const initialQuery = query(
        collection(firestore, "Products"),
        orderBy("name"),
        limit(10)
      );
      const snapshot = await getDocs(initialQuery);

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);

      for (const doc of snapshot.docs) {
        const { category, subcategory } = doc.data();
        const product = {
          images: doc.data().images,
          tags: doc.data().tags,

          id: doc.data().id,
          name: doc.data().name,
          price: doc.data().price,
          tags: doc.data().tags,
        };

        await addProductToCategory(category, subcategory, product);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  const loadMoreProducts = async () => {
    if (loadingMore || !lastDoc) return;

    setLoadingMore(true);
    try {
      const firestore = getFirestore();
      const nextQuery = query(
        collection(firestore, "Products"),
        orderBy("name"),
        startAfter(lastDoc),
        limit(10)
      );
      const snapshot = await getDocs(nextQuery);

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);

      for (const doc of snapshot.docs) {
        const { category, subcategory } = doc.data();
        const product = {
          images: doc.data().images,
          delivery: doc.data().deliveryinfo.shippingtype,
          id: doc.data().id,
          name: doc.data().name,
          price: doc.data().price,
          tags: doc.data().tags,
        };

        await addProductToCategory(category, subcategory, product);
      }

      setCategories(categories);

      setLoadingMore(false);
    } catch (error) {
      console.error("Error loading more data: ", error);
      setLoadingMore(false);
    }
  };

  const addProductToCategory = async (
    categoryName,
    subcategoryName,
    product
  ) => {
    try {
      let category = categories.find((cat) => cat.name === categoryName);
      const firestore = getFirestore();
      const categoryRef = doc(firestore, "Categories", categoryName);
      if (!category) {
        const categorySnapshot = await getDoc(categoryRef);
        category = {
          categoryid: categorySnapshot.data().categoryimage.id,
          categoryimage: categorySnapshot.data().categoryimage,
          name: categoryName,
          subcategories: [],
        };
        categories.push(category);
      }

      let subcategory = category.subcategories.find(
        (subcat) => subcat.name === subcategoryName
      );
      if (!subcategory) {
        const categorySnapshot = await getDoc(categoryRef);
        subcategory = {
          subcategoryimage: categorySnapshot
            .data()
            .subcategories.find((e) => e.subcategoryname === subcategoryName)
            .subcategoryimage,
          name: subcategoryName,
          products: [],
        };

        category.subcategories.push(subcategory);
      }

      const productExists = subcategory.products.some(
        (existingProduct) => existingProduct.id === product.id
      );

      if (!productExists) {
        subcategory.products.push(product);
      }
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  const renderLoadingIndicator = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#A51910" />
    </View>
  );

  const renderFooter = () => {
    return loadingMore ? (
      <View style={styles.loadingMoreContainer}>
        <ActivityIndicator size="small" color="#A51910" />
      </View>
    ) : null;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search Item"
            placeholderTextColor="#000"
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationContainer}>
          <Icon name="notifications" size={24} color="#000" />
          {/* <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>4</Text>
          </View> */}
        </TouchableOpacity>
      </View>
      {loading ? (
        renderLoadingIndicator()
      ) : (
        <>
          <FlatList
            keyExtractor={(item, index) => index}
            style={styles.list}
            data={[{ name: "All Products" }, ...categories]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setCurrentIndex(index)}>
                <View>
                  <Text
                    style={[
                      styles.listpadding,
                      { fontWeight: index === currentindex ? "bold" : null },
                    ]}
                  >
                    {item.name}
                  </Text>
                  {index === currentindex && <View style={styles.line}></View>}
                </View>
              </TouchableOpacity>
            )}
            horizontal
          />

          <FlatList
            keyExtractor={(item, index) => index}
            scrollEnabled={false}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            numColumns={3}
            data={
              currentindex === 0
                ? categories
                : [...categories[currentindex - 1].subcategories]
            }
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.card}>
                  <Image
                    style={{
                      borderRadius: 10,
                      height: 80,
                      width: 80,
                      alignSelf: "center",
                    }}
                    source={{
                      uri: item?.categoryimage || item.subcategoryimage,
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      textAlign: "center",
                      textAlignVertical: "center",
                      // fontFamily: "Medium",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
            }}
          >
            {["Top Selling", "Super Deals", "Sale"].map((text) => (
              <TouchableOpacity
                key={text}
                onPress={() => {
                  setSellingType(text);
                }}
              >
                <Text
                  backgroundColor={sellingType === text ? "#A51910" : "#fff"}
                  style={{
                    textAlign: "center",
                    marginRight: 10,
                    color: sellingType === text ? "#fff" : "#000",
                    height: 30,
                    fontWeight: "bold",
                    borderWidth: sellingType !== text ? 2 : 0,
                    width: 100,
                    textAlignVertical: "center",
                    borderRadius: 20,
                  }}
                >
                  {text}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <FlatList
            data={[
              ...(currentindex === 0
                ? categories.reduce((accumulator, category) => {
                    return accumulator.concat(
                      category.subcategories.reduce((acc, sub) => {
                        return acc.concat(sub.products);
                      }, [])
                    );
                  }, [])
                : categories[currentindex - 1].subcategories.reduce(
                    (accumulator, subcategory) => {
                      accumulator.push(...subcategory.products);
                      return accumulator;
                    },
                    []
                  )),
            ].filter((product) => {
              if (sellingType === "Top Selling") {
                return product;
              } else if (sellingType === "Super Deals") {
                return product.tags && product.tags.includes("Super Deal");
              } else if (sellingType === "Sale") {
                return product.tags && product.tags.includes("Sale");
              } else {
                return false;
              }
            })}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => <ItemTile item={item} />}
            keyExtractor={(item, index) => index}
            ListFooterComponent={renderFooter}
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.1}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchBar: {
    borderWidth: 2,
    borderColor: "#A51910",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  notificationBadge: {
    backgroundColor: "#f00",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  notificationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    marginVertical: 10,
    marginLeft: 20,
  },
  listpadding: {
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 16,
  },
  line: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
  },
  card: {
    margin: 10,
    width: 100,
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default ShopPage;
