import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function DeckListItem({ name, cards }) {

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <Text>{name}</Text>
        <Text>{`${cards} cards`}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeckListItem;
