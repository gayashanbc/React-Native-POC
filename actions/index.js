export function tripsFetchDataSuccess(trips) {
    return {
        type: 'TRIPS_FETCH_DATA_SUCCESS',
        trips
    };
};

export function tripsFetchDataError(bool) {
    return {
        type: 'TRIPS_FETCH_DATA_ERROR',
        error: bool
    }
}

