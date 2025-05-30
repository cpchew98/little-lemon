import * as React from "react";
import { StyleSheet, Image, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Onboarding";
import SplashScreen from '../screens/Splash';
import ProfileScreen from '../screens/Profile';

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

const RootNavigator = () => {
  return (
    <Stack.Navigator >
      {/* <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen}
        options={{ title: 'OnboardingScreen', headerTitle: () => <LogoTitle /> }} /> */}
      <Stack.Screen name="Profile" component={ProfileScreen} 
        options={{ title: 'Profile', headerTitle: () => <LogoTitle /> }} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
});

export default RootNavigator;
