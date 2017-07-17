import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import TripItem from './TripItem';

class TripList extends Component {

  render() {
    return (
      <FlatList
        data={this.props.tripData}
        renderItem={({ item }) => <TripItem key={item.id} item={item} dispatch={this.props.dispatch} />}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default TripList;
