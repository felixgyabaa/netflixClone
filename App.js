import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import HomeStack from "./components/navigation/HomeStack";
import awsExports from "./src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react-native";

Amplify.configure(awsExports);

function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <HomeStack />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
