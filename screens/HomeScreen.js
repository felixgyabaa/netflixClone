import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import HomeCategory from "../components/home_screen/CategoryCard";
import categories from "../assets/data/categories";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={categories.items}
          renderItem={({ item }) => (
            <HomeCategory nav={navigation} categoryData={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
export default HomeScreen;
