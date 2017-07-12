import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('CoolMaps');
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        // case 'APPROVE_TRIP':
        //     nextState = AppNavigator.router.getStateForAction(
        //         NavigationActions.back(),
        //         state
        //     );
        //     break;
        // case 'Logout':
        //     nextState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Login' }),
        //         state
        //     );
        //     break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

function trips(state = [], action) {
    switch (action.type) {
        case 'TRIPS_FETCH_DATA_SUCCESS':
            return action.trips;
        default:
            return state;
    }
}

function tripsFetchDataError(state = false, action) {
    switch (action.type) {
        case 'TRIPS_FETCH_DATA_ERROR':
            return action.error;
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    nav,
    trips,
    tripsFetchDataError
});

export default AppReducer;
