import React, { useState } from "react";
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

const Home = ({ navigation }) => {
    console.log("home");

    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text>Home page</Text>
            
        </KeyboardAvoidingView>
    );
};

export default Home;