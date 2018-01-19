import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { recordQuizResult, resetQuizResults } from '../action';
import globalStyles from '../util/styles';
import { green, red } from '../util/colors';

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 50,
  },
  correctButton: {
    alignItems: 'center',
    backgroundColor: green,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginTop: 50,
    width: 150,
  },
  incorrectButton: {
    alignItems: 'center',
    backgroundColor: red,
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
});

class Quiz extends React.Component {
  render() {
    const { currentCardIndex, correctAnswers, deck, dispatch } = this.props;
    const currentCardNumber = currentCardIndex + 1;

    // Have all the questions been answered?
    if (currentCardNumber > deck.cardCount) {
      return (
        <View
          behavior="padding"
          style={globalStyles.centeredContainer}
        >
          <Text style={globalStyles.mediumText}>Quiz complete</Text>
          <Text
            style={styles.questionText}
          >
            {`${correctAnswers} out of ${deck.cardCount} answered correctly`}
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(resetQuizResults())}
            style={globalStyles.primaryButton}
          >
            <Text>Restart quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const card = deck.cards[currentCardIndex];

    return (
      <View
        behavior="padding"
        style={globalStyles.centeredContainer}
      >
        <Text style={globalStyles.mediumText}>
          Question {currentCardNumber} of {deck.cards.length}
        </Text>
        <Text style={styles.questionText}>{card.question}</Text>
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => {
            this.props.navigation.navigate('Answer', { answer: card.answer });
          }}
        >
          <Text>Show answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.correctButton}
          onPress={() => dispatch(recordQuizResult(1))}
        >
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.incorrectButton}
          onPress={() => dispatch(recordQuizResult(0))}
        >
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
