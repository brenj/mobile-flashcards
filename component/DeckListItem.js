import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function DeckListItem({ deck, navigation }) {

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DeckDetails', deck)}
    >
      <Text>{deck.name}</Text>
      <Text>{`${deck.cardCount} cards`}</Text>
    </TouchableOpacity>
  );
}

export default DeckListItem;
