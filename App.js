import { useEffect, useMemo, useReducer } from "react";
import { Image, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import { AuthContext } from "./contexts/AuthContext";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={require("./assets/Logo.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
    </View>
  );
}

function App({ navigation }) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "onboard":
          return {
            ...prevState,
            isLoading: false,
            isOnboardingCompleted: action.isOnboardingCompleted,
          };
      }
    },
    {
      isLoading: true,
      isOnboardingCompleted: false,
    }
  );

  useEffect(() => {
    (async () => {
      let profileData = [];
      try {
        const getProfile = await AsyncStorage.getItem("profile");
        if (getProfile !== null) {
          profileData = getProfile;
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (Object.keys(profileData).length != 0) {
          dispatch({ type: "onboard", isOnboardingCompleted: true });
        } else {
          dispatch({ type: "onboard", isOnboardingCompleted: false });
        }
      }
    })();
  }, []);

  const authContext = useMemo(
    () => ({
      onboard: async data => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error(e);
        }

        dispatch({ type: "onboard", isOnboardingCompleted: true });
      },
      update: async data => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error(e);
        }

        Alert.alert("Success", "Successfully saved changes!");
      },
      logout: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          console.error(e);
        }

        dispatch({ type: "onboard", isOnboardingCompleted: false });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isOnboardingCompleted ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerBackTitleVisible: false,
                  headerTitle: () => <LogoTitle />
                }}
              />
              <Stack.Screen name="Profile" component={Profile}
                options={{
                  headerBackTitleVisible: false,
                  headerTitle: () => <LogoTitle />,

                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{
                headerBackTitleVisible: false,
                headerTitle: () => <LogoTitle />
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default App;