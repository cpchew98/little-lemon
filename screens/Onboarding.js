import React, { useState, useRef, useContext, useCallback } from "react";
import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from "react-native";
import { validateEmail, validateName } from "../utils";
import Button from "../components/Button";
import Constants from "expo-constants";
import { Header } from "@react-navigation/elements";

// import { AuthContext } from "../contexts/AuthContext";

const Onboarding = ({ navigation }) => {
    const [firstName, onChangeFirstName] = useState("");
    const [email, onChangeEmail] = useState("");

    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateName(firstName);

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
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={"Email"}
                    keyboardType="email-address"
                />
                <Button
                    onPress={() => {
                        navigation.navigate("Dashboard");
                    }}
                    disabled={!isEmailValid && !isFirstNameValid}
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
    btn: {
        backgroundColor: "#f4ce14",
        borderColor: "#f4ce14",
        borderRadius: 9,
        alignSelf: "stretch",
        marginHorizontal: 18,
        marginBottom: 60,
        padding: 10,
        borderWidth: 1,
    },
    btnDisabled: {
        backgroundColor: "#f1f4f7",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 18,
        marginBottom: 60,
    },
    btntext: {
        fontSize: 22,
        color: "#333",
        alignSelf: "center",
    },
});

export default Onboarding;
