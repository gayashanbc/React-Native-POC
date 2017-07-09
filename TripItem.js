import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';


class TripItem extends Component {
    render() {
 //       const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() =>
                    dispatch(NavigationActions.navigate({ routeName: 'TripDetails' }))}
                item={this.props.item}
            //onPress={ () => navigate('TripDetails', {item:this.props.item} )}
            >
                <View style={styles.internalContainer}>
                    <Text style={styles.textDate}>
                        {this.props.item.date}
                    </Text>
                    {this.props.item.status == 0 ? <Text style={styles.textApproved}>
                        Not Approved
                                    </Text> : <Text style={styles.textNotApproved}>
                            Approved
                                        </Text>}
                </View>
                <View style={styles.internalContainer}>
                    <Text style={styles.textTitle}>
                        {this.props.item.title}
                    </Text>
                    <Icon name="done" size={30} color="black" />
                </View>
            </TouchableOpacity>
        );
    }
}

export default TripItem;

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