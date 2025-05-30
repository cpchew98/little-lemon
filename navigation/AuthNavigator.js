import React from 'react';
import { StyleSheet, Image, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from "../screens/Onboarding";
import  SplashScreen  from '../screens/Splash';

const Stack = createStackNavigator();

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

console.log('authnav');
const AuthNavigator = () => (
  <Stack.Navigator>
      <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            // options={{ title: 'OnboardingScreen', headerTitle: () => <LogoTitle /> }}
          />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
});

export default AuthNavigator;