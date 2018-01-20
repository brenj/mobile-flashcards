import PropTypes from 'prop-types';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../action';
import AppStatusBar from './AppStatusBar';
import { saveDeckTitle } from '../util/api';
import globalStyles from '../util/styles';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

class NewDeck extends React.Component {
  state = { title: '' };

  handleTextChange = (text) => {
    this.setState({ title: text });
  }

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { title } = this.state;

    if (!title) {
      Alert.alert(
        'Required data missing',
        'Please provide a deck title before submitting.',
      );
      return;
    }

    const newDeck = {
      [title]: {
        key: title, title, cards: [], cardCount: 0,
      },
    };

    saveDeckTitle(title).then(() => {
      dispatch(addDeck(newDeck));
    });

    navigation.navigate('DeckDetails', { title });

    // Reset NewDeck UI
    this.setState({ title: '' });
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={globalStyles.centeredContainer}
      >
        <AppStatusBar />
        <Text
          style={globalStyles.mediumText}
        >
          What is the title of your new deck?
        </Text>
        <TextInput
          style={globalStyles.textInput}
          value={this.state.title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={this.handleSubmit}
        >
          <Text style={globalStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

NewDeck.propTypes = propTypes;

export default connect()(NewDeck);
