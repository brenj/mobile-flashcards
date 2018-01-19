import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import globalStyles from '../util/styles';

function Credits() {
  return (
    <View style={ globalStyles.centeredContainer }>
      <Text style={ styles.creditsText }>* App created by Brendan J. (@brenj)  </Text>
      <Text style={ styles.creditsText }>* Icon made by Graphic Resources S.L</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  creditsText: {
    fontSize: 20,
    padding: 5,
  },
});

export default Credits;
