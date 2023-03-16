import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Input } from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserData,
  updateWeatherAPI,
  fetchToken,
} from "../../redux/thunks";
import { updateZipcode } from "../../redux/stateSlice";
import Player from "../components/Player";

export default function Main() {
  // const [bgUri, setBgUri] = useState("require('../assets/bg/clear_day.png')");
  const dispatch = useDispatch();
  const { token, temp, city, weather, zipcode, bg } = useSelector(
    (state) => state.updater
  );
  useEffect(() => {
    if (!token) setTimeout(() => dispatch(fetchToken()), 30000);
    dispatch(fetchUserData());
    dispatch(updateWeatherAPI());
  });

  let bgUri = "";
  switch (weather) {
    case "rain":
      bgUri = "require('../assets/bg/gif_rain.gif')";
      break;
    case "clear":
      bgUri = "require('../assets/bg/clear_day.png')";
      break;

    case "clouds":
      bgUri = "require('../assets/bg/cloudy_sky.jpg')";
      break;
  }

  console.log(bgUri);
  return (
    <ImageBackground
      source={require("../assets/bg/gif_rain.gif")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.tempContainer}>
          <Text style={styles.temp}>{`${temp || 67}F`}</Text>
          <Text style={styles.tempData}>{`${weather || "Cloudy"} ${
            city || "New York"
          }`}</Text>
        </View>
        <View style={styles.item}>
          <Input
            textStyle={{ textAlign: "center", fontSize: 20 }}
            style={styles.zipcode}
            placeholder="Zipcode"
            size="large"
            onChangeText={(e) => {
              dispatch(updateZipcode(e));
              if (e.length === 5) {
                setTimeout(() => dispatch(updateWeatherAPI()), 30000);
              }
            }}
          />
        </View>
        <View style={styles.item}>
          <Player />
        </View>
        {/* {!token ? <Text style={styles.body}>Please Login</Text> : <Player />} */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 45,
    marginBottom: 40,
    // backgroundColor: "green",
  },
  item: {
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  tempContainer: {
    // backgroundColor: 'green',
    flexBasis: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  temp: {
    fontSize: 140,
    fontWeight: "bold",
    color: "white",
  },
  tempData: {
    position: "relative",
    top: -25,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  zipcode: {
    size: "large",
    flexBasis: "auto",
    textAlign: "center",
  },
});
