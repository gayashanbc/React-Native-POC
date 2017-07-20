import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { tripsFetchData } from './actions/';

import TripList from './TripList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff8dc',
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class CoolMaps extends Component {
    static navigationOptions = {
        title: 'Cool Maps'
    }

    componentDidMount() {
        this.props.dispatch({ type: 'TRIPS_FETCH_DATA_REQUESTED', payload: { url: 'https://api.myjson.com/bins/vg0qn' } });
    }

    render() {
        return (
            <TripList tripData={this.props.tripData} dispatch={this.props.navigation.dispatch} />
        );
    }
}

const mapStateToProps = state => ({
    tripData: state.trips,
    hasErrored: state.tripsFetchDataError
});

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CoolMaps);