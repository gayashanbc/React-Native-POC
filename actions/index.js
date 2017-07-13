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

export function tripsFetchData(url) {
    return function (dispatch) {
        fetch(url).then((response) => response.json())
            .then((jsonResponse) => dispatch(tripsFetchDataSuccess(jsonResponse.tripData)))
            .catch(() => dispatch(tripsFetchDataError(true)));
    };
}


export function changeTripStatus(trip, status) {
    return function (dispatch, getState) {
        console.log(getState());
        fetch('https://api.myjson.com/bins/vg0qn').then((response) => response.json())
            .then((jsonResponse) => {
                var tripData = jsonResponse.tripData;
                console.log(tripData);

                for (item of tripData) {
                    if (item.id === trip.id) {
                        item.status = status;
                        console.log("found");
                    }
                }

                fetch('https://api.myjson.com/bins/vg0qn', {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tripData: tripData
                    })
                }).then((response) => response.json())
                    .then((jsonResponse) => {
                        console.log(jsonResponse);
                        dispatch(tripsFetchDataSuccess(jsonResponse.tripData));
                    })
                    .catch(() => dispatch(tripsFetchDataError(true)));
            })
            .catch(() => dispatch(tripsFetchDataError(true)));
    }
}

