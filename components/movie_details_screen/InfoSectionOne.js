import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InfoSectionOne = ({ movieDetails }) => {
  return (
    <View style={styles.movieInfo}>
      <Text style={styles.match}>{movieDetails.IMDb}</Text>
      <Text style={styles.year}>{movieDetails.year}</Text>
      <View style={styles.ageContainer}>
        <Text style={styles.age}>{movieDetails.age}+</Text>
      </View>
      <Text style={styles.year}>{movieDetails.numberOfSeasons} Seasons</Text>
      <MaterialIcons name="hd" size={24} color="#E6E6E9" />
    </View>
  );
};

const styles = StyleSheet.create({
  movieInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  match: {
    color: "#93FF96",
    fontWeight: "bold",
    marginRight: 16,
  },
  year: {
    color: "#E6E6E9",
    marginRight: 16,
  },
  ageContainer: {
    backgroundColor: "#F6F740",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
    marginRight: 16,
  },
  age: {
    fontWeight: "bold",
  },
});

export default InfoSectionOne;
