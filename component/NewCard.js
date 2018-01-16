import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../action';
import { addCardToDeck } from '../util/api';

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
      <View>
        <Text>Question:</Text>
        <TextInput
          value={this.state.question}
          onChangeText={this.handleQuestionChange}
        />
        <Text>Answer:</Text>
        <TextInput
          value={this.state.answer}
          onChangeText={this.handleAnswerChange}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(NewCard);
