import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Video } from "expo-av";

var styles = {
  wrapper: {
    backgroundColor: "#fff",
  },
  slide: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  video_container: {
    width: Dimensions.get("window").width,
    height: "40%",
  },
  video: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
};

export default ({ marker }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({
    currentTime: 0,
    duration: 0,
    isPlaying: true,
    isBuffering: false,
  });

  return (
    <Swiper
      style={styles.wrapper}
      activeDotColor="#FF5757"
      paginationStyle={{
        bottom: "41%",
      }}
      index={0}
      loop={false}
    >
      {marker.descriptions.map((item, index) => {
        return (
          <View testID={index.toString()} style={styles.slide}>
            <View style={styles.video_container}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>
            <View style={{ marginTop: "10%", marginStart: "5%" }}>
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/blue-bar.png")} />
                <Text
                  style={{
                    fontFamily: "Gilroy",
                    color: "#36489E",
                    textAlign: "justify",
                    marginStart: 10,
                    marginEnd: 20,
                    fontSize: 15,
                  }}
                >
                  {item.text}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </Swiper>
  );
};
