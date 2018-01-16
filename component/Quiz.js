import React from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

// import { addDeck } from '../action';
// import { saveDeckTitle } from '../util/api';

class Quiz extends React.Component {
  render() {
    const { currentCardIndex, correctAnswers, deck } = this.props;
    const card = deck.cards[currentCardIndex];

    return (
      <KeyboardAvoidingView behavior="padding">
        <Text>{card.question}</Text>
        <TouchableOpacity onPress={() => console.log("Show answer clicked")}>
          <Text>Show answer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Correct click")}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Incorrect click")}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.title];
  const { currentCardIndex, correctAnswers } = state.quiz;
  return { currentCardIndex, correctAnswers, deck };
};

export default connect(mapStateToProps)(Quiz);
