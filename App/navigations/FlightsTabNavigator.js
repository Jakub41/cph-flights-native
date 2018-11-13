import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import I from 'react-native-vector-icons/Entypo';
import s from '../styles/FooterStyle';

import ArrivalsTab from './tabNavigator/ArrivalsTab';
import DeparturesTab from './tabNavigator/DeparturesTab';

const FlightsTabNavigator = createBottomTabNavigator({
    ArrivalsTab: {screen: ArrivalsTab},
    DeparturesTab: {screen: DeparturesTab}
},{
    tabBarComponent: props => {
        return (
            <Footer style={s.footer}>
                <FooterTab>
                    <Button
                            vertical
                            active = {props.navigation.state.index === 0}
                            onPress = {() => props.navigation.navigate('ArrivalsTab')}>
                        <I style={s.button} name='aircraft-landing'/>
                    </Button>
                    <Button vertical
                            active = {props.navigation.state.index === 1}
                            onPress = {() => props.navigation.navigate('DeparturesTab')}>
                        <I style={s.button} name='aircraft-take-off'/>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
});

export default FlightsTabNavigator;