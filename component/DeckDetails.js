import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

function DeckDetails(props) {
  const { title, cardCount } = props.deck;

  return (
    <View>
      <Text>Deck details</Text>
      <Text>{title}</Text>
      <Text>{cardCount}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('NewCard', { title })}
      >
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Start quiz was clicked")}>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const deck = state[ownProps.navigation.state.params.title];
  return { deck };
};

export default connect(mapStateToProps)(DeckDetails);
