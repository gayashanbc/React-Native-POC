import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

//import Routes from './Routes.js';

import CoolMaps from './CoolMaps';
import TripDetails from './TripDetails';
// import TripList from './TripList.js';
// import TripItem from './TripItem';

// class myFirstApp extends Component {
//   render() {
//     return (
//       <Routes />
//     )
//   }
// }

// export default myFirstApp

const myFirstApp = StackNavigator({
  CoolMaps: {screen: CoolMaps},
  TripDetails: {screen: TripDetails},
  // TripList: {screen: TripList},
  // TripItem: {screen: TripItem}
});

AppRegistry.registerComponent('myFirstApp', () => myFirstApp)


