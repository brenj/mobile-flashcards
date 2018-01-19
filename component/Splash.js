import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';

import globalStyles from '../util/styles';

const LOGO_FILE = require('../image/logo.png');

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

class Splash extends React.Component {
  state = { fade: new Animated.Value(0) };

  componentDidMount() {
    Animated.timing(this.state.fade, { toValue: 1, duration: 5000 }).start();
  }

  render() {
    const { navigation } = this.props;
    const { fade } = this.state;

    return (
      <Animated.View
        style={[globalStyles.centeredContainer, { opacity: fade }]}
      >
        <Image source={LOGO_FILE} />
        <Text
          style={[globalStyles.largeText, { paddingBottom: 50 }]}
        >
          Mobile Flashcards
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DeckNavigator');
          }}
          style={globalStyles.primaryButton}
        >
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Credits')}
          style={globalStyles.secondaryButton}
        >
          <Text>Credits</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Splash.propTypes = propTypes;

export default Splash;
