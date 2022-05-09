import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {

  const openPrivacyPolicy = () => {
    Alert.alert('Privacy Policy', 'This app does not collect any personal information.');
  }

  const openTermsOfService = () => {
    Alert.alert('Terms of Service', 'This app does not collect any personal information.');
  }

  const [markers, setMarkers] = React.useState([{
    coordinate: {
      latitude: -34.9290,
      longitude: 138.6010
    },
    title: 'Marker 1',
    description: 'This is the first marker'
  }, {
    coordinate: {
      latitude: -34.9290,
      longitude: 138.6010
    },
    title: 'Marker 2',
    description: 'This is the second marker'
  }]);

  const [region, setRegion] = React.useState({
    latitude: -34.9290,
    longitude: 138.6010,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [languages, setLanguages] = React.useState([{
    name: 'English',
    image: require('./assets/icon.png'),
  }, {
    name: 'French',
    image: require('./assets/icon.png'),
  }]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {languages.map((language, index) => {
          return (
            <Image key={index} style={styles.language} source={language.image} />
          )
        }
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={openPrivacyPolicy}><Text style={{color: "white", fontSize: 24}}>Start the Tour</Text></TouchableOpacity>
      <MapView region={region}
       style={styles.map}>
        {markers.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
       </MapView>
       <TouchableOpacity onPress={() => openTermsOfService()}><Text style={styles.termsOfService}>Terms of service</Text></TouchableOpacity>
       <TouchableOpacity onPress={() => openPrivacyPolicy()}><Text style={styles.privacyPolicy}>Privacy Policy</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#36489e',
    borderRadius: 5,
    padding: 10,
    width: Dimensions.get('window').width - 100,
    alignItems: 'center'
  },
  termsOfService: {
    width: Dimensions.get('window').width,
    fontSize: 12,
    color:'#36489e',
    textAlign: 'right',
    marginTop: 50,
    marginRight: 18,
  },
  privacyPolicy: {
    width: Dimensions.get('window').width,
    fontSize: 12,
    color:'#36489e',
    textAlign: 'right',
    marginTop: 10,
    marginRight: 18,
  },
  map: {
    top: 30,
    width: Dimensions.get('window').width - 18,
    height: Dimensions.get('window').height - 200,
  },
});