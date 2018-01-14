import React from 'react';
import { Text, View } from 'react-native';

function DeckDetails({ navigation }) {
  const { cards, name } = navigation.state.params;

  return (
    <View>
      <Text>Deck details</Text>
      <Text>{name}</Text>
      <Text>{cards}</Text>
    </View>
  );
}

export default DeckDetails;
