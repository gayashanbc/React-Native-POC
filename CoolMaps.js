import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TripList from './TripList.js';

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

const CoolMaps = ({ tripData, dispatch }) => {
    return (
        <TripList tripData={tripData} dispatch = {dispatch} />
    );
};

CoolMaps.navigationOptions = {
    title: 'Cool Maps'
}

CoolMaps.propTypes = {
    tripData: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tripData: state.trips.tripData,
});

export default connect(mapStateToProps)(CoolMaps);