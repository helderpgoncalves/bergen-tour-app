import React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Localization from "expo-location";
import i18n from "i18n-js";
import languages from "../data/locales";
import * as Location from "expo-location";

export default function MapScreen({ navigation }) {
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

  return (
    <MapView
      showsUserLocation
      showsMyLocationButton
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location ? location.coords.latitude : 0,
        longitude: location ? location.coords.longitude : 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
