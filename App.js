import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AppStatusBar from './component/AppStatusBar';
import DeckDetails from './component/DeckDetails';
import DeckList from './component/DeckList';
import NewDeck from './component/NewDeck';
import { blue, white } from './util/colors';

const DeckNavigator = TabNavigator({
  DeckList: {
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="archive" size={30} />,
    },
    screen: DeckList,
  },
  NewDeck: {
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="plus-square-o" size={30} />,
      tabBarLabel: 'New',
    },
    screen: NewDeck,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

const AppNavigator = StackNavigator({
  Home: {
    screen: DeckNavigator,
  },
  DeckDetails: {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Decks'
    },
    screen: DeckDetails,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
