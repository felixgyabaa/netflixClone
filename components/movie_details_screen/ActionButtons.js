import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ActionButtons = () => {
  return (
    <>
      <TouchableOpacity style={styles.playButton}>
        <MaterialIcons
          style={{ marginHorizontal: 8 }}
          name="play-arrow"
          size={24}
          color="black"
        />
        <Text style={{ fontWeight: "bold" }}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.downloadButton}>
        <MaterialIcons
          style={{ marginHorizontal: 8 }}
          name="file-download"
          size={24}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold" }}>Download</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: "#F4F4F6",
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#252527",
  },
});
export default ActionButtons;
