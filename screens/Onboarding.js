import React, { useState, useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";

import { validateEmail, validateName } from "../utils";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";

const Onboarding = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");

  const isEmailValid = validateEmail(email);
  const isFirstNameValid = validateName(firstName);
  const isLastNameValid = validateName(lastName);
  const { onboard } = useContext(AuthContext);


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.heading}>Let us get to know you</Text>
      <View style={styles.page}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={"First Name"}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={"Last Name"}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={"Email"}
          keyboardType="email-address"
        />
        <Button
          onPress={() => onboard({ firstName, lastName, email })}
          disabled={!isEmailValid && !isFirstNameValid && !isLastNameValid}
        >
          Next
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#grey",
  },
  page: {
    padding: 30
  },
  heading: {
    fontSize: 25,
    paddingVertical: 60,
    color: "#495E57",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#495E57",
  },
  inputBox: {
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    alignSelf: "stretch",
    height: 50,
    marginTop: 18,
    marginBottom: 18,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
});

export default Onboarding;
