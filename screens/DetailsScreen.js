import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import markers from "../data/markers";
import MapView from "react-native-maps";
import Swiper from "../components/Swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function DetailsScreen({ navigation, route }) {
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

  return (
    <View style={styles.container}>
      <Swiper marker={marker} />
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          alignContent: "center",
          width: Dimensions.get("window").width,
          height: hp("30%"),
        }}
      >
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
            margin: wp("10%"),
            marginBottom: Platform.OS == "android" ? 5 : 35,
            borderWidth: 1,
            overflow: "hidden",
            marginTop: "2%",
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
  buttonsBelow: {
    flexDirection: "row",
    marginTop: hp("2%"),
    justifyContent: "space-between",
    marginBottom: 15,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
