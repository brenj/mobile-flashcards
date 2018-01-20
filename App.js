import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import AppNavigator from './navigator';
import { setNotification } from './util/notifications';

export default class App extends React.Component {
  componentDidMount() {
    setNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
