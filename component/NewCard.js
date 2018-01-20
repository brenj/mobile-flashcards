import PropTypes from 'prop-types';
import React from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../action';
import { addCardToDeck } from '../util/api';
import globalStyles from '../util/styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

class NewCard extends React.Component {
  state = { question: '', answer: '' };

  handleQuestionChange = (text) => {
    this.setState({ question: text });
  }

  handleAnswerChange = (text) => {
    this.setState({ answer: text });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { question, answer } = this.state;
    const { title } = navigation.state.params;

    if (!question || !answer) {
      Alert.alert(
        'Required data missing',
        'Please provide a question and answer before submitting.',
      );
      return;
    }

    const newCard = { question, answer };
    addCardToDeck(title, newCard).then(() => {
      dispatch(addCard(title, newCard));
    });

    navigation.goBack();

    // Reset UI
    this.setState({ question: '', answer: '' });
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={globalStyles.centeredContainer}
      >
        <Text style={globalStyles.mediumText}>Question:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={this.state.question}
          onChangeText={this.handleQuestionChange}
        />
        <Text style={globalStyles.mediumText}>Answer:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={this.state.answer}
          onChangeText={this.handleAnswerChange}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          style={globalStyles.primaryButton}
        >
          <Text style={globalStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

NewCard.propTypes = propTypes;

export default connect()(NewCard);
