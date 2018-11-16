import React from 'react';
import { View, Platform, Image, StyleSheet } from "react-native";
import {createStackNavigator} from "react-navigation";
import FlightsTabNavigator from "./App/navigations/FlightsTabNavigator";
import FlightsHeader from "./App/components/header/FlightsHeader";
import HeaderStyle from "./App/styles/HeaderStyle";
import s from "./App/styles/headerImgStyle";
import DepartureCard from "./App/components/departures/DepartureCard";

const Routes = createStackNavigator({
    FlightsTabNavigator: {
        screen: FlightsTabNavigator,

    }
},{
    initialRouteName: 'FlightsTabNavigator',
    navigationOptions: {
        headerTitle: '',
        headerBackground: (
            <Image
                style={s.image}
                //source={require('./App/assets/header/header.jpg')}
                source={{uri: 'https://images.unsplash.com/photo-1503365113766-4a362681eac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79cf794378a008ab1d74b8e612d72ad0&auto=format&fit=crop&w=1050&q=80'}}
            />
        ),
        header: props => <FlightsHeader {...props} />,
        ...HeaderStyle,
        animationEnabled: true
    }

});

export default Routes;
