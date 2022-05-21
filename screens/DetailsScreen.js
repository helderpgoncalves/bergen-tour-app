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
import markers from "../data/markers";
import MapView from "react-native-maps";
export default function DetailsScreen({ navigation, route }) {
  const video = React.useRef(null);
  const { locale, marker } = route.params;

  const onButtonTouch = (type) => {
    if (type == "back") {
      // Show the previous market page
      var index = marker.index - 1;
      if (index >= 0) {
        navigation.navigate("Details", {
          location: locale,
          marker: markers[index],
        });
      }
    } else {
      // Show the next market page
      var index = marker.index + 1;
      if (index < 7) {
        navigation.navigate("Details", {
          location: locale,
          marker: markers[index],
        });
      }
    }
  };

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

  const [status, setStatus] = React.useState({
    currentTime: 0,
    duration: 0,
    isPlaying: true,
    isBuffering: false,
  });

  return (
    <View style={styles.container}>
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
      <View style={styles.text}>
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
            {marker.descriptions[0].text}
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <View style={styles.buttonsBelow}>
          <TouchableOpacity
            style={{ marginStart: "15%" }}
            onPress={() => onButtonTouch("back")}
          >
            <Image
              source={require("../assets/left.png")}
              style={{ width: 51, height: 51 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/home.png")}
              style={{ width: 51, height: 51 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginEnd: "15%" }}
            onPress={() => onButtonTouch("next")}
          >
            <Image
              source={require("../assets/right.png")}
              style={{ width: 51, height: 51 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: 10,
            borderWidth: 1,
            overflow: "hidden",
            marginTop: "3%",
            width: "70%",
            borderRadius: 10,
            borderColor: "#FF5757",
            zIndex: -1,
          }}
        >
          <MapView
            onPress={() => {
              navigation.navigate("Map");
            }}
            style={{ width: "100%", height: 90, borderRadius: 10 }}
            region={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
            initialRegion={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: marker ? marker.coordinate.latitude : 60.3975,
                longitude: marker ? marker.coordinate.longitude : 5.32455,
              }}
              title={marker ? marker.title : "Marker"}
              description={marker ? marker.description : "Description"}
            />
          </MapView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  video_container: {
    width: Dimensions.get("window").width,
    height: "40%",
  },
  video: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  text: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 20,
    width: Dimensions.get("window").width - 20,
  },
  buttonsBelow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
