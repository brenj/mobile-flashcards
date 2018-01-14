import React from 'react';
import { FlatList, View } from 'react-native';

import DeckListItem from './DeckListItem';

const decks = [
  { key: 1, name: 'Test 1', cards: 5 },
  { key: 2, name: 'Test 2', cards: 5 },
  { key: 3, name: 'Test 3', cards: 5 },
  { key: 4, name: 'Test 4', cards: 5 },
  { key: 5, name: 'Test 5', cards: 5 },
];

function DeckList({ navigation }) {
  return (
    <View>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DeckListItem deck={item} navigation={navigation} />)}
      />
    </View>
  );
}

export default DeckList;
