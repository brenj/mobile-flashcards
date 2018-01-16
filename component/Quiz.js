import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { recordQuizResult, resetQuizResults } from '../action';

class Quiz extends React.Component {
  render() {
    const { currentCardIndex, correctAnswers, deck, dispatch } = this.props;
    const currentCardNumber = currentCardIndex + 1;

    // Have all the questions been answered?
    if (currentCardNumber > deck.cardCount) {
      return (
        <View behavior="padding">
          <Text>Quiz Done</Text>
          <Text>{correctAnswers}</Text>
          <TouchableOpacity onPress={() => dispatch(resetQuizResults())}>
            <Text>Restart quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const card = deck.cards[currentCardIndex];

    return (
      <View behavior="padding">
        <Text>{currentCardNumber}/{deck.cards.length}</Text>
        <Text>{card.question}</Text>
        <TouchableOpacity onPress={() => console.log("Show answer clicked")}>
          <Text>Show answer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(recordQuizResult(1))}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(recordQuizResult(0))}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.title];
  const { currentCardIndex, correctAnswers } = state.quiz;
  return { currentCardIndex, correctAnswers, deck };
};

export default connect(mapStateToProps)(Quiz);
