import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function DeckListItem({ deck, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => (
        navigation.navigate('DeckDetails', { title: deck.title }))}
    >
      <Text>{deck.title}</Text>
      <Text>{`${deck.cardCount} cards`}</Text>
    </TouchableOpacity>
  );
}

export default DeckListItem;
