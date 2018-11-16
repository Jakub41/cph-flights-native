import React, {Component} from 'react';
import { View } from 'react-native';
import DeparturesContainer from '../../components/departures/DeparturesContainer';

class DeparturesTab extends Component {

    render() {
        return (
                <View>
                    <DeparturesContainer flightType='departures'/>
                </View>
        );
    }
}

export default DeparturesTab;