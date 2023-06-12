import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import HomeStack from "./components/navigation/HomeStack";

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <HomeStack />
    </NavigationContainer>
  );
}
