import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import Iconicon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const FullScreenVideoPlayer = ({ route }) => {
  const video = useRef(null);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const [position, setPosition] = useState(0);
  //   const [duration, setDuration] = useState(0);

  //   const onPlaybackStatusUpdate = (status) => {
  //     setIsPlaying(status.isPlaying);
  //     setPosition(status.positionMillis);
  //     setDuration(status.durationMillis);
  //   };

  //   const playPauseHandler = async () => {
  //     if (isPlaying) {
  //       await video.current.pauseAsync();
  //     } else {
  //       await video.current.playAsync();
  //     }
  //   };

  //   const seekHandler = async (value) => {
  //     await video.current.setPositionAsync(value);
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        isLooping
        shouldPlay
        source={{
          uri: route.params.data.videolink,
        }}
        style={styles.video}
        useNativeControls={false}
        resizeMode="cover"
        // onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      <View
        style={{
          position: "absolute",
          top: height / 1.8,
          height: height / 2,
          // backgroundColor: "#A51910",
          right: 10,
          alignSelf: "flex-start",
        }}
      >
        <Image
          style={{
            position: "absolute",
            aspectRatio: 1,
            height: 40,
            borderColor: "#ffff",
            borderWidth: 2,
            borderRadius: 25,
          }}
          source={{
            uri: route.params.data.image,
          }}
        />
        <View
          style={{
            width: 40,
            top: 70,
            height: 40,
            alignItems: "center",
          }}
        >
          <Iconicon size={40} name="heart-outline" color={"#fff"} />
          <Text style={{ color: "#fff" }}>{route.params.data.likes}</Text>
        </View>
        <View
          style={{
            width: 40,
            top: 100,
            height: 40,
            alignItems: "center",
          }}
        >
          <IconFont size={40} name="bookmark-o" color={"#fff"} />
          <Text numberOfLines={1}         ellipsizeMode='clip'
 style={{ color: "#fff" ,height:'100%' , width: '100%' }}>
            Favourite
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: width,
    // height: height,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "black",
  },
  video: { flex: 1 },
  controls: {
    alignContent: "center",
    backgroundColor: "#ffff",
    position: "absolute",
    bottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 100,
    width: "100%",
    alignItems: "center",
  },
  slider: {
    width: "80%",
    height: 40,
  },
});

export default FullScreenVideoPlayer;
