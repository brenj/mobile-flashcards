import PropTypes from 'prop-types';
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

const propTypes = {
  currentCardIndex: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  deck: PropTypes.shape({
    cardCount: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Quiz(props) {
  const {
    currentCardIndex,
    correctAnswers,
    deck,
    dispatch,
  } = props;
  const currentCardNumber = currentCardIndex + 1;

  // Have all the questions been answered?
  if (currentCardNumber > deck.cardCount) {
    return (
      <View
        behavior="padding"
        style={globalStyles.centeredContainer}
      >
        <Text style={globalStyles.largeText}>Quiz complete</Text>
        <Text
          style={styles.questionText}
        >
          {`${correctAnswers} out of ${deck.cardCount} answered correctly`}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('DeckDetails', { title: deck.title });
          }}
          style={globalStyles.primaryButton}
        >
          <Text style={globalStyles.buttonText}>Deck details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(resetQuizResults())}
          style={globalStyles.secondaryButton}
        >
          <Text style={globalStyles.buttonText}>Restart quiz</Text>
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
          props.navigation.navigate('Answer', { answer: card.answer });
        }}
      >
        <Text style={globalStyles.buttonText}>Show answer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.correctButton}
        onPress={() => dispatch(recordQuizResult(1))}
      >
        <Text style={globalStyles.buttonText}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.incorrectButton}
        onPress={() => dispatch(recordQuizResult(0))}
      >
        <Text style={globalStyles.buttonText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  );
}

Quiz.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.title];
  const { currentCardIndex, correctAnswers } = state.quiz;
  return { currentCardIndex, correctAnswers, deck };
};

export default connect(mapStateToProps)(Quiz);
