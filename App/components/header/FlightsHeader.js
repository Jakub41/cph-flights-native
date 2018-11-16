import React from "react";
import { Header } from "react-navigation";
import { View, Text, Platform, Image, StyleSheet } from "react-native";

const FlightsHeader = props => {
    return (
        <View>
            <Header {...props} />
        </View>
    );
};

export default FlightsHeader;