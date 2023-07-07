import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Button,
  Text,
} from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

import HomeCategory from "../components/home_screen/CategoryCard";
import categories from "../assets/data/categories";

const HomeScreen = ({ navigation }) => {
  const userSelector = (context) => [context.user];

  const { user, signOut } = useAuthenticator(userSelector);

  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <Button title="Sign Out" onPress={signOut} />
        <Text style={styles.userName}>{user.username}</Text>
      </View>
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
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "white",
    padding: 8,
    marginBottom: 8,
  },
  userName: { flex: 3 / 4, color: "white", fontSize: 24, fontWeight: "bold" },
});
export default HomeScreen;
