import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeTripStatus } from './actions';

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
    marginTop: 100,
  },
  statsView: {

  },
  statsViewInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statsLineOne: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsLineTwo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  mapView: {

  },
  btnApprove: {
    padding: 15,
    marginLeft: 40,
    fontSize: 20,
  },
  btnReject: {
    padding: 15,
    marginRight: 40,
    fontSize: 20,
  },
});

const TripDetails = (props) => {
  const { navigation } = props;
  const { params } = navigation.state;
  const { goBack } = navigation;
  const { dispatch } = props;

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
        <Button
          style={styles.btnApprove}
          onPress={() => {
            props.dispatch({ type: 'TRIP_STATUS_CHANGE_REQUESTED', payload: { url: 'https://api.myjson.com/bins/vg0qn', trip: params.item, status: 1 } });
            goBack();
          }}
          color="green"
          title="Approve"
        />
        <Button
          style={styles.btnReject}
          onPress={() => {
            props.dispatch({ type: 'TRIP_STATUS_CHANGE_REQUESTED', payload: { url: 'https://api.myjson.com/bins/vg0qn', trip: params.item, status: 0 } });
            goBack();
          }}
          color="red"
          title="Reject"
        />
      </View>
    </View>
  );
};

TripDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
};


TripDetails.navigationOptions = {
  title: 'Trip Details',
};

const mapStateToProps = state => ({
  tripData: state.trips.tripData,
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
