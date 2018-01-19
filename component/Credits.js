import React from 'react';
import { Text, View } from 'react-native';

import globalStyles from '../util/styles';

function Credits() {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text
        style={globalStyles.mediumText}
      >
        * App created by Brendan J. (@brenj)
      </Text>
      <Text
        style={globalStyles.mediumText}
      >
        * Icon made by Graphic Resources S.L
      </Text>
    </View>
  );
}

export default Credits;
