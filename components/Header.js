import React from "react";
import { Image, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={require("../assets/Logo.png")}
                accessible={true}
                accessibilityLabel={"Little Lemon Logo"}
            />

        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        padding: 12,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        height: 50,
        width: 150,
        resizeMode: "contain",
    },
}
)

export default Header;
