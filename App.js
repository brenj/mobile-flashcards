import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Answer from './component/Answer';
import Credits from './component/Credits';
import DeckDetails from './component/DeckDetails';
import DeckList from './component/DeckList';
import NewDeck from './component/NewDeck';
import NewCard from './component/NewCard';
import Quiz from './component/Quiz';
import Splash from './component/Splash';
import { crimson } from './util/colors';
import { setNotification } from './util/notifications';

const DeckNavigator = TabNavigator({
  DeckList: {
    navigationOptions: {
      header: null,
      tabBarIcon: () => <FontAwesome name="archive" size={30} />,
      tabBarLabel: 'Decks',
    },
    screen: DeckList,
  },
  NewDeck: {
    navigationOptions: {
      header: null,
      tabBarIcon: () => <FontAwesome name="plus-square-o" size={30} />,
      tabBarLabel: 'New',
    },
    screen: NewDeck,
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: crimson,
    }
  }
});

const AppNavigator = StackNavigator({
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
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
