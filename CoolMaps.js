import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import TripList from './TripList.js';

class CoolMaps extends Component {
    static navigationOptions = {
        title: 'Cool Maps'
    }
    constructor(props) {
        super(props);
        this.state = {
            tripData: [
                {
                    "id": 0,
                    "title": "Trip to Rome",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 1,
                    "status": 1,
                    "duration": 70,
                    "distance": 125,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                },
                {
                    "id": 1,
                    "title": "Trip to India",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 2,
                    "status": 0,
                    "duration": 12,
                    "distance": 428,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Trip to China",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 1,
                    "status": 1,
                    "duration": 45,
                    "distance": 560,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Trip to Africa",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 1,
                    "status": 1,
                    "duration": 10,
                    "distance": 325,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Trip to Iraq",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 3,
                    "status": 0,
                    "duration": 84,
                    "distance": 1245,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                }
                ,
                {
                    "id": 5,
                    "title": "Trip to Japan",
                    "date": "1980-01-02T00:00:00.000Z",
                    "travelType": 2,
                    "status": 0,
                    "duration": 15,
                    "distance": 200,
                    "points": [
                        {
                            "lat": 6.905426,
                            "lon": 79.854599
                        },
                        {
                            "lat": 6.505426,
                            "lon": 79.554599
                        },
                        {
                            "lat": 6.005426,
                            "lon": 79.054599
                        }
                    ]
                }
            ]
        }
    }


    render() {
        // const goToTripDetails = () => {
        //     Actions.tripDetails()
        // }

        return (
            <TripList tripData={this.state.tripData} navigation = {this.props.navigation} />

        )
    }
}
export default CoolMaps

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