import { StyleSheet, Image, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from "../screens/Onboarding";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={require("../assets/images/Logo.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
    </View>
  );
}

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ title: 'OnboardingScreen', headerTitle: () => <LogoTitle /> }}
        />
        <Stack.Screen
          name="Dashboard"
          component={OnboardingScreen}
          options={{ title: 'Welcome', headerTitle: () => <LogoTitle /> }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
});