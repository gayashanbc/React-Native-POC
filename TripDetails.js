import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { changeTripStatus } from './actions';

const TripDetails = (props) => {
    const { navigation, tripData } = props;
    const { params } = navigation.state;
    const { goBack } = navigation;

    return (
        <View style={styles.container}>
            <View style={styles.mapView}>
                <Text style={styles.welcome}>
                    {params.item.title}
                </Text>
            </View>
            <View style={styles.statsView}>
                <View style={styles.statsViewInner}>
                    <Text style={styles.statsLineOne}>
                        Start
                    </Text>
                    <Text style={styles.statsLineOne}>
                        Duration
                    </Text>
                    <Text style={styles.statsLineOne}>
                        Distance
                    </Text>
                </View>
                <View style={styles.statsViewInner}>
                    <Text style={styles.statsLineTwo}>
                        09:40
                    </Text>
                    <Text style={styles.statsLineTwo}>
                        {params.item.duration}
                    </Text>
                    <Text style={styles.statsLineTwo}>
                        {params.item.distance}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.btnApprove} onPress={() => {
                    props.changeTripStatus(params.item, 1);
                    goBack();
                }} color="green" title="Approve" />
                <Button style={styles.btnReject} onPress={() => {
                    props.changeTripStatus(params.item, 0);
                    goBack();
                }} color="red" title="Reject" />
            </View>
        </View>
    );
};


TripDetails.navigationOptions = {
    title: 'Trip Details'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',

    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100
    },
    statsView: {

    },
    statsViewInner: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statsLineOne: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    statsLineTwo: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    mapView: {

    },
    btnApprove: {
        padding: 15,
        marginLeft: 40,
        fontSize: 20
    },
    btnReject: {
        padding: 15,
        marginRight: 40,
        fontSize: 20
    }
});

const mapStateToProps = state => ({
    tripData: state.trips.tripData,
});

const mapDispatchToProps = dispatch => ({
    changeTripStatus: (trip, status) => dispatch(changeTripStatus(trip, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);