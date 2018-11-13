import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import S from './../../styles/FlightsCardStyle';

const {
    container,
    upperRow,
    separator,
    coinName,
    coinPrice,
    statisticsContainer,
    percentChangePlus
} = S;

const DepartureCard = ({
                           time, expected, airline, flight_no, gate, terminal, status, destination
                       }) => {
    return (
        <View style={container}>

            <View style={upperRow}>
                <Text style={coinName}>{time}</Text>
                <Text style={coinPrice}>{expected}</Text>
            </View>

            <View style={statisticsContainer}>
                <Text style={coinName}>{airline}</Text>
                <Text style={coinPrice}>{flight_no}</Text>
            </View>

            <View style={statisticsContainer}>
                <Text style={coinName}>{destination}</Text>
            </View>

            <View style={statisticsContainer}>
                <Text style={percentChangePlus}>{gate}</Text>
                <Text style={percentChangePlus}>{terminal}</Text>
                <Text style={percentChangePlus}>{status}</Text>
            </View>



        </View>
    )
};

export default DepartureCard;