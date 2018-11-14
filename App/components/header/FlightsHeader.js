import React from "react";
import { Header } from "react-navigation";
import { View, Platform, Image, StyleSheet } from "react-native";

const FlightsHeader = props => {
    return (
        <View
            style={{
                height: 200,
                marginTop: Platform.OS === "ios" ? 0 : 0
            }}
        >
            <Header {...props} />
        </View>
    );
};

export default FlightsHeader;