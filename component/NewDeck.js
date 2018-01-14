import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../action';

class NewDeck extends React.Component {

  state = { title: '' };

  handleTextChange = (text) => {
    this.setState({ title: text });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const newDeck = {
      50: {key: 50, name: this.state.title, cardCount: 0},
    };

    // save to asynchronous storage
    dispatch(addDeck(newDeck));

    // Reset NewDeck UI
    this.setState({ title: '' });
    navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(NewDeck);
