import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const HomeCategory = ({ categoryData, nav }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryData.title}</Text>
      <FlatList
        horizontal
        data={categoryData.movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => nav.navigate("MovieDetails", { item })}
          >
            <Image style={styles.image} source={item.poster} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  image: {
    margin: 8,
    height: 180,
    width: 120,
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default HomeCategory;
