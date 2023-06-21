import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React from "react";

const ModalPicker = ({
  seasons,
  changeisModalVisible,
  changeSeason,
  isModalVisible,
}) => {
  return (
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
                <Text style={{ margin: 16, fontSize: 24, fontWeight: "bold" }}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Button title="Back" onPress={() => changeisModalVisible(false)} />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({});
