import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SelectList } from "react-native-dropdown-select-list";
import { MaterialIcons } from "@expo/vector-icons";
import movies from "../assets/data/movie";
import InfoSectionOne from "../components/movie_details_screen/InfoSectionOne";
import ReactionButtons from "../components/movie_details_screen/ReactionButtons";
import ActionButtons from "../components/movie_details_screen/ActionButtons";
import EpisodeRow from "../components/movie_details_screen/EpisodeRow";
import InfoSectionTwo from "../components/movie_details_screen/InfoSectionTwo";

const MovieDetailsScreen = ({ navigation, route }) => {
  let movieDetails = movies["movie1"];

  let seasons = movieDetails.seasons.items.map((season) => {
    return { key: season.id, value: season.name };
  });

  // let seasons = movieDetails.seasons.items.map((season) => {
  //   {
  //     (key = season.id), (value = season.name);
  //   }
  // });
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeisModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  const changeSeason = (season) => {
    setSelectedSeason(season);
    setisModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Button title="Back" onPress={() => navigation.pop()} />
      </View>

      <Image source={movieDetails.poster} style={styles.poster} />

      <ScrollView style={{ flex: 1 }}>
        {/* Movie Title */}
        <Text style={styles.title}>{movieDetails.title}</Text>

        {/* Movie Info Section 1 */}
        <InfoSectionOne movieDetails={movieDetails} />

        {/* Play and Download Buttons */}
        <ActionButtons />

        {/* Movie Info Section 2 */}
        <InfoSectionTwo movieDetails={movieDetails} />

        {/* Reaction Buttons */}
        <TouchableOpacity onPress={() => console.log(isModalVisible)}>
          <ReactionButtons />
        </TouchableOpacity>

        {/* Season Picker */}
        <TouchableOpacity onPress={() => setisModalVisible(true)}>
          <View style={styles.seasonPicker}>
            <Text style={{ color: "white", fontSize: 16 }}>
              {seasons[selectedSeason].value}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
        </TouchableOpacity>
        {/* <View
          style={{
            borderWidth: 2,
            borderColor: "white",
            padding: 8,
            marginTop: 8,
          }}
        >
          <Picker
            selectedValue={selectedSeason}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedSeason(itemValue)
            }
            style={{ color: "white", backgroundColor: "white" }}
          >
            {seasons.map((seasonName) => (
              <Picker.Item
                label={seasonName.value}
                value={seasonName.key}
                key={seasonName.key}
              />
            ))}
          </Picker>
        </View> */}
        {/* Episode List */}
        {movieDetails.seasons.items[selectedSeason].episodes.items.map(
          (item) => (
            <View key={item.id} style={{ flex: 1, height: 160 }}>
              <EpisodeRow episodeDetails={item} />
            </View>
          )
        )}
      </ScrollView>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeisModalVisible(false)}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              width: "80%",
              height: "20%",
            }}
          >
            <ScrollView style={{ flex: 1 }}>
              {seasons.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => changeSeason(item.key)}
                >
                  <Text
                    style={{ margin: 16, fontSize: 24, fontWeight: "bold" }}
                  >
                    {item.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Button title="Back" onPress={() => changeisModalVisible(false)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  appBar: {
    flexDirection: "row",
  },
  poster: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  seasonPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});

export default MovieDetailsScreen;
