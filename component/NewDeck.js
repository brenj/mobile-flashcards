import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../action';
import { saveDeckTitle } from '../util/api';

class NewDeck extends React.Component {

  state = { title: '' };

  handleTextChange = (text) => {
    this.setState({ title: text });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { title } = this.state;

    const newDeck = {
      [title]: { key: title, title, cards: [], cardCount: 0 }};

    saveDeckTitle(title).then(() => {
      dispatch(addDeck(newDeck));
    });

    navigation.navigate('DeckDetails', newDeck[title]);

    // Reset NewDeck UI
    this.setState({ title: '' });
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
