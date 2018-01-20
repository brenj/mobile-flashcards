import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Answer from '../component/Answer';
import Credits from '../component/Credits';
import DeckDetails from '../component/DeckDetails';
import DeckList from '../component/DeckList';
import NewDeck from '../component/NewDeck';
import NewCard from '../component/NewCard';
import Quiz from '../component/Quiz';
import Splash from '../component/Splash';
import { crimson } from '../util/colors';

const DeckNavigator = TabNavigator({
  DeckList: {
    navigationOptions: {
      header: null,
      tabBarIcon: () => (
        <FontAwesome style={{ paddingTop: 15 }} name="archive" size={30} />
      ),
      tabBarLabel: 'Decks',
    },
    screen: DeckList,
  },
  NewDeck: {
    navigationOptions: {
      header: null,
      tabBarIcon: () => (
        <FontAwesome
          style={{ paddingTop: 15 }}
          name="plus-square"
          size={30}
        />
      ),
      tabBarLabel: 'New',
    },
    screen: NewDeck,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 15,
      paddingTop: 5,
    },
    style: {
      backgroundColor: crimson,
    },
  },
});

export default AppNavigator = StackNavigator({
  Home: {
    navigationOptions: {
      header: null,
    },
    screen: Splash,
  },
  DeckNavigator: {
    screen: DeckNavigator,
  },
  DeckDetails: {
    navigationOptions: {
      title: 'Details',
    },
    screen: DeckDetails,
  },
  NewCard: {
    navigationOptions: {
      title: 'New card',
    },
    screen: NewCard,
  },
  Quiz: {
    navigationOptions: {
      title: 'Quiz',
    },
    screen: Quiz,
  },
  Answer: {
    navigationOptions: {
      title: 'Answer',
    },
    screen: Answer,
  },
  Credits: {
    navigationOptions: {
      title: 'Credits',
    },
    screen: Credits,
  },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: crimson,
    },
    headerTintColor: 'white',
  },
});
