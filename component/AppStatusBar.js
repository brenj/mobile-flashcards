import { Constants } from 'expo';
import React from 'react';
import { StatusBar, View } from 'react-native';

function AppStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent />
    </View>
  );
}

export default AppStatusBar;
