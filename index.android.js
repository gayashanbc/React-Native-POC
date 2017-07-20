import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import rootSaga from './sagas';

export default class myFirstApp extends Component {

  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(AppReducer, undefined, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('myFirstApp', () => myFirstApp)


