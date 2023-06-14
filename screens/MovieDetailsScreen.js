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
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SelectList } from "react-native-dropdown-select-list";
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
        <TouchableOpacity onPress={() => console.log(selectedSeason)}>
          <ReactionButtons />
        </TouchableOpacity>

        {/* Season Picker */}
        <View
          style={{
            alignItems: "center",
            borderTopWidth: 3,
            width: "35%",
            borderColor: "#E50914",
            marginTop: 8,
          }}
        >
          <SelectList
            setSelected={setSelectedSeason}
            data={seasons}
            placeholder="Select Season"
            defaultOption={seasons[0]}
            boxStyles={{ marginVertical: 8 }}
            inputStyles={{ color: "white" }}
            dropdownStyles={{ height: "50%" }}
            dropdownTextStyles={{ color: "white" }}
          />
        </View>

        {/* Episode List */}
        {movieDetails.seasons.items[selectedSeason].episodes.items.map(
          (item) => (
            <View key={item.id} style={{ flex: 1, height: 160 }}>
              <EpisodeRow episodeDetails={item} />
            </View>
          )
        )}
        {/* <FlatList
          scrollEnabled={true}
          style={{ marginBottom: 10 }}
          data={movieDetails.seasons.items}
          renderItem={({ item, index }) => (
            <View>
            <EpisodeRow episodeDetails={item.episodes.items[index]} />
            <Text style={{ color: "grey" }}>
            {item.episodes.items[index].plot}
            </Text>
            </View>
            )}
          /> */}
      </ScrollView>
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
});

export default MovieDetailsScreen;
