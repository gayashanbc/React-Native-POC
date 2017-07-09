# React Native POC App
This is a mobile app developed under [this](https://docs.google.com/document/d/1E0Y4EtSRlbWhMoG9Zn_a5HABDDpb6bmPBBdSIEX25FE/edit#heading=h.6soffpkr7f45) specification.

## What I have done so far
* Designed the views for showing the trips and specific trip details.
* Added logic to display the trip status based on the JSON data.
* Added navigation functionality to 'Approve' and 'Reject' buttons.
* Replaced react-native-router-flux with react-navigation.
* Replaced ScrollView with a FlatList.
* Integrated with Redux.

## What I have yet to do
* Host the JSON file in the cloud and fetch that data to the app use React's Fetch API.
* Add functionality to the 'Approve' and 'Reject' buttons, so when either of them is clicked, React's Fetch API will update the JSON file.
* Add icons to each list item based on the travelType property in the JSON object.
* Improve and optimize react-navigation and redux integration.

## Screenshots

### 1. Trip List Screen
![TripList Screen](https://preview.ibb.co/b9jCvF/Screenshot_1499585760.png)

### 2. Trip Details Screen
![TripDetails Screen](https://preview.ibb.co/gGk2vF/Screenshot_1499585764.png)
