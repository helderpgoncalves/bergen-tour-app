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
import MapView from "react-native-maps";
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
  const [location, setLocation] = React.useState(null);

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
            style={{ width: 41, height: 41 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/home.png")}
            style={{ width: 41, height: 41 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginEnd: "15%" }}
          onPress={() => navigation.navigate("Map")}
        >
          <Image
            source={require("../assets/right.png")}
            style={{ width: 41, height: 41 }}
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
          width: "70%",
          borderRadius: 10,
          borderColor: "#FF5757",
          zIndex: -1,
        }}
      >
        <MapView
          style={{ width: "100%", height: 60, borderRadius: 10 }}
          initialRegion={{
            latitude: marker ? marker.coordinate.latitude : 60.3975,
            longitude: marker ? marker.coordinate.longitude : 5.32455,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
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
