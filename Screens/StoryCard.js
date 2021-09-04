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
import Ionicons from "react-native-vector-icons/Ionicons";

const StoryCard = ({ story }) => {
  const [loaded] = useFonts({
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  });

  let stories = require("./temp_stories.json");
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../assets/story_image_1.png")}
            style={styles.storyImage}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.storyTitleText}>{story.title}</Text>
            <Text style={styles.storyAuthorText}>{story.author}</Text>
            <Text style={styles.descriptionText}>{story.description}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white",
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white",
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});

export default StoryCard;
