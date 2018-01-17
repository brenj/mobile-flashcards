import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { clearNotification, setNotification } from '../util/notifications';

function DeckDetails(props) {
  const { navigation } = props;
  const { title, cardCount } = props.deck;

  return (
    <View>
      <Text>Deck details</Text>
      <Text>{title}</Text>
      <Text>{cardCount}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewCard', { title })}
      >
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Reset notification since a quiz was started
          clearNotification().then(setNotification);
          navigation.navigate('Quiz', { title });
        }}
      >
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.title];
  return { deck };
};

export default connect(mapStateToProps)(DeckDetails);
