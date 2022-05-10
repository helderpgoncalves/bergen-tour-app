import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import German from "./../assets/flags/German";
import Spanish from "./../assets/flags/Spanish";
import French from "./../assets/flags/French";
import Norwegian from "./../assets/flags/Norwegian";
import Chinese from "./../assets/flags/Chinese";
import * as Location from "expo-location";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    Alert.alert(location.coords.latitude.toString());
  }

  const openPrivacyPolicy = () => {
    Alert.alert(
      "Privacy Policy",
      "This app does not collect any personal information."
    );
  };

  const openTermsOfService = () => {
    Alert.alert(
      "Terms of Service",
      "This app does not collect any personal information."
    );
  };

  const changeLanguage = (language) => {
    Alert.alert("Language", `You have selected ${language}`);
  };

  const [markers, setMarkers] = React.useState([
    {
      coordinate: {
        latitude: 60.39453,
        longitude: 5.32506,
      },
      title: "Marker 1",
      description: "This is the first marker",
    },
    {
      coordinate: {
        latitude: 60.39468,
        longitude: 5.32336,
      },
      title: "Marker 2",
      description: "This is the second marker",
    },
    {
      coordinate: {
        latitude: 60.39558,
        longitude: 5.32577,
      },
      title: "Marker 3",
      description: "This is the third marker",
    },
    {
      coordinate: {
        latitude: 60.39705,
        longitude: 5.32334,
      },
      title: "Marker 4",
      description: "This is the fourth marker",
    },
    {
      coordinate: {
        latitude: 60.3975,
        longitude: 5.32455,
      },
      title: "Marker 5",
      description: "This is the fifth marker",
    },
    {
      coordinate: {
        latitude: 60.3987,
        longitude: 5.32325,
      },
      title: "Marker 6",
      description: "This is the sixth marker",
    },
    {
      coordinate: {
        latitude: 60.39629,
        longitude: 5.32836,
      },
      title: "Marker 7",
      description: "This is the seventh marker",
    },
  ]);

  const [region, setRegion] = React.useState({
    latitude: 60.39453,
    longitude: 5.32506,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeLanguage("german")}>
          <German />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("spanish")}>
          <Spanish />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("french")}>
          <French />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("Norwegian")}>
          <Norwegian />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("Chinese")}>
          <Chinese />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={{ color: "white", fontSize: 24 }}>Start the Tour</Text>
      </TouchableOpacity>
      <MapView
        showsUserLocation
        region={location}
        style={styles.map}
        showsMyLocationButton
      >
        {markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <MapView.Callout>
              <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                <Text>{marker.title}</Text>
              </TouchableOpacity>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
      <TouchableOpacity onPress={() => openTermsOfService()}>
        <Text style={styles.termsOfService}>Terms of service</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openPrivacyPolicy()}>
        <Text style={styles.privacyPolicy}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: "10%",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
  },
  button: {
    backgroundColor: "#36489e",
    borderRadius: 5,
    padding: 10,
    width: Dimensions.get("window").width - 100,
    alignItems: "center",
  },
  termsOfService: {
    width: Dimensions.get("window").width,
    fontSize: 12,
    color: "#36489e",
    textAlign: "right",
    marginTop: 50,
    marginRight: 18,
  },
  privacyPolicy: {
    width: Dimensions.get("window").width,
    fontSize: 12,
    color: "#36489e",
    textAlign: "right",
    marginTop: 10,
    marginRight: 18,
  },
  map: {
    top: 30,
    width: Dimensions.get("window").width - 18,
    height: Dimensions.get("window").height - 300,
  },
});
