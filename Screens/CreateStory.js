/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

const CreateStory = (props) => {
  const [loaded] = useFonts({
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  });
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  } else {
    let preview_images = {
      image_1: require("../assets/story_image_1.png"),
      image_2: require("../assets/story_image_2.png"),
      image_3: require("../assets/story_image_3.png"),
      image_4: require("../assets/story_image_4.png"),
      image_5: require("../assets/story_image_5.png"),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
          />
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}></Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
});

export default CreateStory;
