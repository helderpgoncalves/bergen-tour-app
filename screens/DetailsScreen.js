import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
export default function DetailsScreen({ navigation, route }) {
  const video = React.useRef(null);
  const { locale, marker } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: marker ? marker.title : "Details",
      headerStyle: {
        headerTitleStyle: {
          fontFamily: "Gilroy",
        },
      },
    });
  }, [navigation, marker]);

  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
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
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      <View style={styles.text}>
        <Text
          style={{
            fontFamily: "Gilroy",
            color: "#36489E",
            textAlign: "justify",
            marginStart: 20,
            marginEnd: 20,
            fontSize: 15,
          }}
        >
          These ships would typically sail to Bergen during the spring and
          summer months, load up with dried cod, and then distribute the fish
          across Europe during the rest of the year. Norwegian dried cod was
          shipped as far away as the Mediterranean and was especially sought
          after during the fasting month of Lent.
        </Text>
        <Text
          style={{
            fontFamily: "Gilroy",
            textAlign: "justify",
            marginStart: 20,
            marginEnd: 20,
            marginTop: 20,
            fontSize: 15,
          }}
        >
          The Hanseatics’ power was thanks in large part to their near monopoly
          on the trade in dried fish and their possession of large merchant
          ships which they sailed in convoys for protection.
        </Text>
      </View>
      <View style={styles.buttonsBelow}>
        <TouchableOpacity style={{ marginStart: "15%" }}>
          <Image
            source={require("../assets/left.png")}
            style={{ width: 51, height: 51 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/home.png")}
            style={{ width: 51, height: 51 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginEnd: "15%" }}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            source={require("../assets/right.png")}
            style={{ width: 51, height: 51 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  video: {
    width: Dimensions.get("window").width,
    height: "40%",
  },
  text: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
  },
  buttonsBelow: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
