import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TripItem from './TripItem';

class TripList extends Component {

    render() {
        return (
            <FlatList
                data={this.props.tripData}
                renderItem={({ item }) => <TripItem key = {item.id} item={item} dispatch = {this.props.dispatch} />}
                keyExtractor={item => item.id}
            />
        )
    }
}

export default TripList;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: 'white',
        flex: 1,

    },
    internalContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    },
    textTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textDate: {
        color: 'black',
        fontSize: 15
    },
    textApproved: {
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textNotApproved: {
        color: 'orange',
        fontSize: 15,
        fontWeight: 'bold'
    }
})