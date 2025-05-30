import React from "react";
import { View, Text, StyleSheet, ActivityIndicator , Button} from "react-native";

const Splash = () => {
    console.log("Splash");

    
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => {}} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: '000000'
  }
});

export default Splash;