import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('CoolMaps');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('CoolMaps');
const initialNavState = AppNavigator.router.getStateForAction(
    firstAction
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        // case 'Login':
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

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//     switch (action.type) {
//         case 'Login':
//             return { ...state, isLoggedIn: true };
//         case 'Logout':
//             return { ...state, isLoggedIn: false };
//         default:
//             return state;
//     }
// }

const initialState = {
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
};

function trips(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TRIPS':
            return { ...state };
        default:
            return state;
    }
}

const AppReducer = combineReducers({
    nav,
    trips,
});

export default AppReducer;
