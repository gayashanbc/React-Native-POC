import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

class TripDetails extends Component {
    static navigationOptions = {
        title: "Trip Details"
    }

    render() {
        // const goToTripDetails = () => {
        //     Actions.coolMaps()
        // }

        const {goBack} = this.props.navigation;
        const {params} = this.props.navigation.state;
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
                    <Button style={styles.btnApprove} onPress={() => goBack()} color="green" title="Approve" />
                    <Button style={styles.btnReject} onPress={() => goBack()} color="red" title="Reject" />
                </View>
            </View>
        );
    }
}
export default TripDetails

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