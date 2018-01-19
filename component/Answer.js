import React from 'react';
import { Text, View } from 'react-native';

import globalStyles from '../util/styles';

function Answer(props) {
  const answer = props.navigation.state.params.answer;

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.mediumText}>{answer}</Text>
    </View>
  );
}

export default Answer;
