import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

const MovieDetailsScreen = ({ navigation, route }) => {
  let movieDetails = route.params.item;

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "white" }}>{movieDetails.id}</Text>
        <Button title="Back" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
