import React from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../util/styles';

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
        <Text style={styles.splashText}>Mobile Flashcards</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DeckNavigator')
          }}
          style={styles.startButton}
        >
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Credits')}
          style={styles.creditsButton}
        >
          <Text>Credits</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  splashText: {
    fontSize: 30,
    padding: 10,
    paddingBottom: 50,
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: 150,
  },
  creditsButton: {
    alignItems: 'center',
    backgroundColor: '#ffe34c',
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
});

export default Splash;
