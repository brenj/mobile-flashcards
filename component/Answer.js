import React from 'react';
import { Text, View } from 'react-native';

function Answer(props) {
  const answer = props.navigation.state.params.answer;

  return (
    <View>
      <Text>Answer</Text>
      <Text>{answer}</Text>
    </View>
  );
}

export default Answer;
