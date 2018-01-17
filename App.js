import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Answer from './component/Answer';
import AppStatusBar from './component/AppStatusBar';
import Credits from './component/Credits';
import DeckDetails from './component/DeckDetails';
import DeckList from './component/DeckList';
import NewDeck from './component/NewDeck';
import NewCard from './component/NewCard';
import Quiz from './component/Quiz';
import Splash from './component/Splash';
import { blue, white } from './util/colors';
import { setNotification } from './util/notifications';

const DeckNavigator = TabNavigator({
  DeckList: {
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="archive" size={30} />,
      tabBarLabel: 'Decks',
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
    screen: Splash,
  },
  DeckNavigator: {
    screen: DeckNavigator,
  },
  DeckDetails: {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Details'
    },
    screen: DeckDetails,
  },
  NewCard: {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'New card'
    },
    screen: NewCard,
  },
  Quiz: {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Quiz'
    },
    screen: Quiz,
  },
  Answer: {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Answer'
    },
    screen: Answer,
  },
  Credits: {
    navigationOptions: {
      title: 'Credits'
    },
    screen: Credits,
  },
});

export default class App extends React.Component {
  componentDidMount() {
    setNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar />
          <AppNavigator />
        </View>
      </Provider>
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
