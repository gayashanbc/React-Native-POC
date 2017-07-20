import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from '../api';

function* fetchTrips(action) {
    try {
        const trips = yield call(api.fetchTrips, action.payload.url);
        //console.log(action);
        yield put({ type: 'TRIPS_FETCH_DATA_SUCCESS', trips });
    } catch (e) {
        //console.log(e);
        yield put({ type: 'TRIPS_FETCH_DATA_ERROR', bool: false });
    }
}

function* changeTripStatus(action) {
    try {
        const trips = yield call(api.changeTripStatus, action.payload)
       // console.log('trip status');
        //console.log(action);
        yield put({ type: 'TRIPS_FETCH_DATA_SUCCESS', trips });
    } catch (e) {
        //console.log(e);
        yield put({ type: 'TRIPS_FETCH_DATA_ERROR', bool: false });
    }
}

export default function* rootSaga() {
    yield takeEvery('TRIPS_FETCH_DATA_REQUESTED', fetchTrips);
    yield takeEvery('TRIP_STATUS_CHANGE_REQUESTED', changeTripStatus);
}