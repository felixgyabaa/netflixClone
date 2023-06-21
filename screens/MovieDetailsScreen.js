import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import movies from "../assets/data/movie";
import InfoSectionOne from "../components/movie_details_screen/InfoSectionOne";
import ReactionButtons from "../components/movie_details_screen/ReactionButtons";
import ActionButtons from "../components/movie_details_screen/ActionButtons";
import EpisodeRow from "../components/movie_details_screen/EpisodeRow";
import InfoSectionTwo from "../components/movie_details_screen/InfoSectionTwo";
import ModalPicker from "../components/movie_details_screen/ModalPicker";

const MovieDetailsScreen = ({ navigation, route }) => {
  let movieDetails = movies["movie1"];

  let seasons = movieDetails.seasons.items.map((season) => {
    return { key: season.id, value: season.name };
  });

  const [selectedSeason, setSelectedSeason] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [status, setStatus] = useState({});
  const video = useRef(null);

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

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: movieDetails.seasons.items[selectedSeason].episodes.items[
            selectedEpisode
          ].video,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <ScrollView style={{ flex: 1 }}>
        {/* Movie Title */}
        <Text style={styles.title}>{movieDetails.title}</Text>

        {/* Movie Info Section 1 */}
        <InfoSectionOne movieDetails={movieDetails} />

        {/* Play and Download Buttons */}
        <ActionButtons status={status} video={video} />

        {/* Movie Info Section 2 */}
        <InfoSectionTwo movieDetails={movieDetails} />

        {/* Reaction Buttons */}
        <ReactionButtons />

        {/* Season Picker */}
        <TouchableOpacity onPress={() => setisModalVisible(true)}>
          <View style={styles.seasonPicker}>
            <Text style={{ color: "white", fontSize: 16 }}>
              {seasons[selectedSeason].value}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
        </TouchableOpacity>

        {/* Episode List */}
        {movieDetails.seasons.items[selectedSeason].episodes.items.map(
          (item, index) => (
            <View key={item.id} style={{ flex: 1, height: 160 }}>
              <EpisodeRow
                episodeDetails={item}
                setSelectedEpisode={setSelectedEpisode}
                index={index}
              />
            </View>
          )
        )}
      </ScrollView>
      <ModalPicker
        seasons={seasons}
        changeSeason={changeSeason}
        changeisModalVisible={changeisModalVisible}
        isModalVisible={isModalVisible}
      />
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
  video: {
    alignSelf: "center",
    width: "100%",
    height: "30%",
  },
});

export default MovieDetailsScreen;
