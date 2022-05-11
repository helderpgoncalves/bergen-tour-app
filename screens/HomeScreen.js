import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
const { Marker, Callout } = MapView;
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Localization from "expo-location";
import i18n from "i18n-js";
import languages from "../data/locales";
import markers from "../data/markers";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locale, setLocale] = useState(Localization.locale);
  i18n.locale = locale;
  i18n.fallbacks = true;
  i18n.translations = languages;

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
    setLocale(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeLanguage("de")}>
          <Image source={require("../assets/flags/de.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("es")}>
          <Image source={require("../assets/flags/es.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("fr")}>
          <Image source={require("../assets/flags/fr.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("no")}>
          <Image source={require("../assets/flags/no.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage("ch")}>
          <Image source={require("../assets/flags/ch.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Details", {
            location: location,
          })
        }
      >
        <Text style={{ color: "white", fontSize: 24, fontFamily: "Gilroy" }}>
          {i18n.t("startTour")}
        </Text>
      </TouchableOpacity>
      <MapView
        showsUserLocation
        region={location}
        style={styles.map}
        showsMyLocationButton
      >
        {markers.map((marker, index) => (
          <Marker
            key={marker.index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Callout
              onPress={() =>
                navigation.navigate("Details", {
                  locale: locale,
                  marker: marker,
                })
              }
            >
              <Text>{marker.title}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity onPress={() => openTermsOfService()}>
        <Text style={styles.termsOfService}>{i18n.t("termsOfService")}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openPrivacyPolicy()}>
        <Text style={styles.privacyPolicy}>{i18n.t("privacyPolicy")}</Text>
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
    borderColor: "#000",
    botderWidth: 3,
    backgroundColor: "#36489e",
    borderRadius: 5,
    padding: 10,
    width: Dimensions.get("window").width - 100,
    alignItems: "center",
  },
  termsOfService: {
    width: Dimensions.get("window").width,
    fontSize: 14,
    color: "#36489e",
    textAlign: "right",
    fontWeight: "700",
    marginTop: 50,
    fontFamily: "Gilroy",
    marginRight: 18,
  },
  privacyPolicy: {
    width: Dimensions.get("window").width,
    fontSize: 14,
    color: "#36489e",
    fontWeight: "700",
    textAlign: "right",
    marginTop: 10,
    fontFamily: "Gilroy",
    marginRight: 18,
  },
  locationButtonCallout: {
    borderRadius: 0,
    opacity: 0.8,
    backgroundColor: "lightgrey",
  },
  map: {
    top: 30,
    width: Dimensions.get("window").width - 18,
    height: Dimensions.get("window").height - 300,
  },
});
