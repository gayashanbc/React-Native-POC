# React Native POC App
This is a mobile app developed under [this](https://docs.google.com/document/d/1E0Y4EtSRlbWhMoG9Zn_a5HABDDpb6bmPBBdSIEX25FE/edit#heading=h.6soffpkr7f45) specification.

## What I have done so far
* Designed the views for showing the trips and specific trip details.
* Added logic to display the trip status based on the JSON data.
* Added navigation functionality to 'Approve' and 'Reject' buttons.
* Replaced react-native-router-flux with react-navigation.
* Replaced ScrollView with a FlatList.
* Integrated with Redux.
* Added icons to each list item based on the travelType property in the JSON object.
* Add functionality to the 'Approve' and 'Reject' buttons to change the approval status of the trip.

## What I have yet to do
* Host the JSON file in the cloud and fetch that data to the app use React's Fetch API.
* ~~Add functionality to the 'Approve' and 'Reject' buttons, so when either of them is clicked, React's Fetch API will update the JSON file.~~
* ~~Add icons to each list item based on the travelType property in the JSON object.~~
* Improve and optimize react-navigation and redux integration.

## Screenshots

### 1. Trip List Screen
![TripList Screen](https://lh5.googleusercontent.com/WH5I_Lj7PwNN5eJWj3xVsYWK12ORA-Gfnc-31FZTafqYQm5F5mTONDnF4e6ZKnXXBuZ__rL_kfybY4U=w1349-h642-rw)

### 2. Trip Details Screen
![TripDetails Screen](https://lh4.googleusercontent.com/WGL85AvL26eG2PyFe469xNMvhQ6-BccBvbNDvQ59rzPiBmSzMp6C-6vl_9AD39jzrElASi_5IKREse8=w1349-h642-rw)
