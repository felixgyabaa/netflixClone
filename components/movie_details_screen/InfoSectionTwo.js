import { View, Text } from "react-native";
import React from "react";

const InfoSectionTwo = ({ movieDetails }) => {
  return (
    <View>
      <Text style={{ color: "white" }}>{movieDetails.plot}</Text>
      <Text style={{ color: "#9999A1", marginVertical: 8 }}>
        Cast: {movieDetails.cast}
      </Text>
    </View>
  );
};

export default InfoSectionTwo;
