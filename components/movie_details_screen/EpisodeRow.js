import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const EpisodeRow = ({ episodeDetails, setSelectedEpisode, index }) => {
  return (
    <View>
      <View style={styles.episodeRow}>
        <TouchableOpacity
          style={{ width: "30%", marginRight: 8 }}
          onPress={() => setSelectedEpisode(index)}
        >
          <Image style={styles.episodePoster} source={episodeDetails.poster} />
        </TouchableOpacity>
        <View style={{ justifyContent: "flex-start" }}>
          <Text style={styles.episodeTitle}>{episodeDetails.title}</Text>
          <Text style={styles.episodeDuration}>{episodeDetails.duration}</Text>
        </View>
        <TouchableOpacity
          style={{ marginHorizontal: 8, position: "absolute", right: 0 }}
        >
          <MaterialIcons name="file-download" size={32} color="grey" />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "grey" }}>{episodeDetails.plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  episodeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  episodePoster: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  episodeTitle: {
    color: "white",
    fontSize: 12,
  },
  episodeDuration: {
    color: "grey",
    fontSize: 10,
  },
});

export default EpisodeRow;
