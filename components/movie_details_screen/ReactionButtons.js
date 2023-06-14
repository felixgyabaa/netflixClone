import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ReactionButtons = () => {
  return (
    <View style={styles.reactionButtons}>
      <TouchableOpacity style={styles.reactionButton}>
        <MaterialIcons name="add" size={32} color="white" />
        <Text style={{ color: "darkgrey" }}>My List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactionButton}>
        <MaterialIcons name="thumb-up-off-alt" size={32} color="white" />
        <Text style={{ color: "darkgrey" }}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactionButton}>
        <MaterialIcons
          style={{ transform: [{ rotateZ: "-25deg" }] }}
          name="send"
          size={32}
          color="white"
        />
        <Text style={{ color: "darkgrey" }}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  reactionButton: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ReactionButtons;
