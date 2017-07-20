export function fetchTrips(url) {
    return fetch(url).then((response) => response.json())
        .then((jsonResponse) => jsonResponse.tripData);
}

export async function changeTripStatus({url, trip, status}) {
    var tripData = await fetchTrips(url);
   // console.log(tripData);

    for (item of tripData) {
        if (item.id === trip.id) {
            item.status = status;
          //  console.log("found");
        }
    }

   return fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tripData: tripData
        })
    }).then((response) => response.json())
      .then((jsonResponse) => jsonResponse.tripData);
}