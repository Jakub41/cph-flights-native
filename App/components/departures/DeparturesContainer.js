import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import S from '../../styles/ContentContainerStyle';

import FetchFlightData from '../../Actions/FetchFlightData';
import DepartureCard from './DepartureCard';

class DeparturesContainer extends Component {

    componentWillMount() {
        this.props.FetchFlightData(this.props.flightType);
    }

    renderDepartureCards() {
        const { flight } = this.props;
        return flight.data.map((flight, i) =>
            <DepartureCard
                key={i}
                time={flight.time}
                expected={flight.expected}
                airline={flight.airline}
                flight_no={flight.flight_no}
                gate={flight.gate}
                terminal={flight.terminal}
                status={flight.status}
                destination={flight.destination}
            />
        )
    }


    render() {

        const { flight } = this.props;
        const { contentContainer } = S;

        if (flight.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={flight.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderDepartureCards()}
            </ScrollView>
        )


    }
}

function mapStateToProps(state) {
    return {
        flight: state.flight
    }
}

export default connect(mapStateToProps, { FetchFlightData })(DeparturesContainer)