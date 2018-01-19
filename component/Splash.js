import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';

import globalStyles from '../util/styles';

class Splash extends React.Component {
  state = { fade: new Animated.Value(0) };

  componentDidMount() {
    Animated.timing(
      this.state.fade, { toValue: 1, duration: 5000 }).start();
  }

  render() {
    const { navigation } = this.props;
    let { fade } = this.state;

    return (
      <Animated.View
        style={[globalStyles.centeredContainer, { opacity: fade }]}
      >
        <Image source={require('../image/logo.png')} />
        <Text
          style={[globalStyles.largeText, { paddingBottom: 50 } ]}
        >
          Mobile Flashcards
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DeckNavigator')
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

export default Splash;
