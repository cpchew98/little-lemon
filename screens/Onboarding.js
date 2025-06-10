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
import LogoTitle from "../components/Header";

const Onboarding = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    setIsFormValid(isEmailValid && isFirstNameValid && isLastNameValid);

  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    validateForm();
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    validateForm();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateForm();
  };

  const { onboard } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LogoTitle />
      <Text style={styles.heading}>Let us get to know you</Text>
      <View style={styles.page}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={handleFirstNameChange}
          placeholder={"First Name"}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={handleLastNameChange}
          placeholder={"Last Name"}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={handleEmailChange}
          placeholder={"Email"}
          keyboardType="email-address"
        />
        <Button
          onPress={() => onboard({ firstName, lastName, email })}
          disabled={!isFormValid}
        >
          Submit
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
