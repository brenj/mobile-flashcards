import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

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
        onPress={() => navigation.navigate('Quiz', { title })}
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
