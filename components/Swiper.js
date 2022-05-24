import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import Swiper from "react-native-swiper";
import { Video, Audio } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

var styles = {
  wrapper: {
    backgroundColor: "white",
  },
  video_container: {
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    height: hp("30%"), // 70% of height device screen
  },
  video: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: "100%",
  },
};

export default ({ marker }) => {
  const video = React.useRef(null);
  const [sound, setSound] = React.useState();

  const [status, setStatus] = React.useState({
    currentTime: 0,
    duration: 0,
    isPlaying: true,
    isBuffering: false,
  });

  async function playSound(audio) {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(audio);
      await sound.playAsync();
      // Your sound is playing!
      console.log("Sound is Playing");

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await sound.unloadAsync();
    } catch (error) {
      // An error occurred!
      console.log(error);
    }
  }

  return (
    <Swiper
      style={styles.wrapper}
      activeDotColor="#FF5757"
      paginationStyle={{
        bottom: hp("24%"),
      }}
      index={0}
      loop={false}
    >
      {marker.descriptions.map((item, index) => {
        return (
          <View testID={index.toString()}>
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
            <View
              style={{
                marginTop: "13%",
                marginStart: wp("5%"),
                width: Dimensions.get("window").width,
                height: hp("30%"),
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Image source={require("../assets/blue-bar.png")} />
                <View style={{ marginStart: 10, marginEnd: wp("10%") }}>
                  <Text
                    style={{
                      fontFamily: "Gilroy",
                      color: "#36489E",
                      textAlign: "justify",
                      fontSize: 15,
                    }}
                  >
                    {item.text}
                  </Text>
                  <TouchableOpacity
                    style={{ marginTop: 5 }}
                    onPress={() => playSound(item.audio)}
                  >
                    <Image
                      source={require("../assets/audio_icon.png")}
                      style={{ width: 41, height: 41 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </Swiper>
  );
};
