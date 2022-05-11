import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    Gilroy: require("./Gilroy.otf"),
    Marcellus: require("./Marcellus-Regular.ttf"),
  });
