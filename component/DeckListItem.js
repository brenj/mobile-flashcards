import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { gray } from '../util/colors';

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'stretch',
    flex: 1,
    padding: 5,
  },
  listItemText: {
    backgroundColor: gray,
    fontSize: 20,
    textAlign: 'center',
  },
});

const propTypes = {
  deck: PropTypes.shape({
    cardCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

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

DeckListItem.propTypes = propTypes;

export default DeckListItem;
