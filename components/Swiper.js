import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Video } from "expo-av";

var styles = {
  wrapper: {
    backgroundColor: "#fff",
  },
  slide1: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    marginTop: "10%",
    marginStart: 20,
    width: Dimensions.get("window").width - 20,
  },
};

export default () => (
  <Swiper
    style={styles.wrapper}
    activeDotColor="#FF5757"
    paginationStyle={{
      bottom: "64%",
    }}
    index={0}
    loop={false}
  >
    <View testID="Swipe" style={styles.slide1}>
      <View>
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
            These ships would typically sail to Bergen during the spring and
            summer months, load up with dried cod, and then distribute the fish
            across Europe during the rest of the year. Norwegian dried cod was
            shipped as far away as the Mediterranean and was especially sought
            after during the fasting month of Lent.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: "5%" }}>
          <Image source={require("../assets/red-bar.png")} />
          <Text
            style={{
              fontFamily: "Gilroy",
              textAlign: "justify",
              marginStart: 10,
              marginEnd: 20,
              fontSize: 15,
            }}
          >
            The Hanseatics’ power was thanks in large part to their near
            monopoly on the trade in dried fish and their possession of large
            merchant ships which they sailed in convoys for protection.
          </Text>
        </View>
      </View>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
);
