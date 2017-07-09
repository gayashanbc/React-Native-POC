import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import CoolMaps from './CoolMaps.js'
import TripDetails from './TripDetails.js'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="coolMaps" component={CoolMaps} title="Cool Maps" initial={true} />
            <Scene key="tripDetails" component={TripDetails} title="Trip Details" />
        </Scene>
    </Router>
)

export default Routes