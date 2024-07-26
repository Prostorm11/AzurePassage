import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  startAfter,
  limit,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import { useNavigation } from "@react-navigation/native";


const VideoFeed = () => {
  const [videos, setvideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    getinitialvideos();
  }, []);

  const getinitialvideos = async () => {
    setLoading(true);
    try {
      const firestore = getFirestore();

      const initialQuery = query(collection(firestore, "Videos"), limit(10));

      const snapshot = await getDocs(initialQuery);
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);
      for (const edoc of snapshot.docs) {
        let viddetail = {};
        const docref = doc(firestore, "Products", edoc.id.toString());
        const docdata = await getDoc(docref);
        viddetail.productid = edoc.id;
        viddetail.videolink = edoc.data().videolink;
        viddetail.likes = edoc.data().likes;
        viddetail.productname = docdata.data().name;
        viddetail.category = docdata.data().category;
        viddetail.subcategory = docdata.data().subcategory;
        viddetail.image = docdata.data().images[0];

        videos.push(viddetail);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  const loadMoreVideos = async () => {
    if (loadingMore || !lastDoc) return;

    setLoadingMore(true);
    try {
      const firestore = getFirestore();
      const nextQuery = query(
        collection(firestore, "Videos"),
        startAfter(lastDoc),
        limit(10)
      );
      const snapshot = await getDocs(nextQuery);

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLastDoc(lastVisible);

      for (const edoc of snapshot.docs) {
        let viddetail = {};
        const docref = doc(firestore, "Products", edoc.id.toString());
        const docdata = await getDoc(docref);
        viddetail.productid = edoc.id;
        viddetail.videolink = edoc.data().videolink;
        viddetail.likes = edoc.data().likes;
        viddetail.productname = docdata.data().name;
        viddetail.category = docdata.data().category;
        viddetail.subcategory = docdata.data().subcategory;
        viddetail.image = docdata.data().images[0];

        videos.push(viddetail);
      }

      setLoadingMore(false);
    } catch (error) {
      console.error("Error loading more data: ", error);
      setLoadingMore(false);
    }
  };
  const renderLoadingIndicator = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <ActivityIndicator size="large" color="#A51910" />
    </View>
  );

  const renderFooter = () => {
    return loadingMore ? (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="small" color="#A51910" />
      </View>
    ) : null;
  };

  return loading ? (
    renderLoadingIndicator()
  ) : (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={videos}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("videoplayer", {
              data: item,
            })
          }
          style={styles.videoContainer}
        >
          <Video
            style={styles.video}
            shouldPlay={true}
            useNativeControls={false}
            isMuted={true}
            source={{ uri: item.videolink }}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          />
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.videoDetails}>
            <Text numberOfLines={1} style={styles.productName}>
              {item.productname}
            </Text>
            <Text numberOfLines={1} style={styles.category}>
              {item.category + " / " + item.subcategory}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      ListFooterComponent={renderFooter}
      onEndReached={loadMoreVideos}
      onEndReachedThreshold={0.1}
    />
  );
};

export default VideoFeed;

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  footer: {},
  contentContainer: {
    margin: 10,flex:1
  },
  videoContainer: {
    aspectRatio: 9 / 16,
    flex: 1,
    margin: 3,
    borderRadius: 15,
  },
  video: {
    flex: 1,
    aspectRatio: 9 / 16,
    borderRadius: 15,
  },
  image: {
    aspectRatio: 1,
    height: 40,
    borderColor: "#ffff",
    borderWidth: 2,
    top: 10,
    left: 10,
    borderRadius: 20,
    position: "absolute",
  },
  videoDetails: {
    height: 20,
    position: "absolute",
    bottom: 25,
    left: 15,
    right: 5,
  },
  productName: {
    color: "#ffff",
    fontSize: 15,
    //fontFamily: "Poppin",
  },
  category: {
    color: "#ffff",
    fontSize: 10,
   // fontFamily: "Medium",
  },
});
