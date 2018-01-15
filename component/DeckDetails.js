import React from 'react';
import { Text, View } from 'react-native';

function DeckDetails({ navigation }) {
  const { title, cardCount } = navigation.state.params;

  return (
    <View>
      <Text>Deck details</Text>
      <Text>{title}</Text>
      <Text>{cardCount}</Text>
    </View>
  );
}

export default DeckDetails;
