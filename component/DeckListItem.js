import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { gray } from '../util/colors';

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'stretch',
    flex: 1,
    padding: 2,
  },
  listItemText: {
    backgroundColor: gray,
    fontSize: 20,
    padding: 2,
    textAlign: 'center',
  },
});

function DeckListItem({ deck, navigation }) {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => (
          navigation.navigate('DeckDetails', { title: deck.title }))}
      >
        <Text style={styles.listItemText}>{deck.title}</Text>
        <Text style={styles.listItemText}>{`${deck.cardCount} cards`}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeckListItem;
