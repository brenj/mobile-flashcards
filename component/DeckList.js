import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import { receiveDecks } from '../action';
import DeckListItem from './DeckListItem';
import { getDecks } from '../util/api';

class DeckList extends React.Component {
  componentDidMount() {
    this.props.dispatch(receiveDecks(getDecks()));
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <DeckListItem deck={item} navigation={navigation} />)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const decks = Object.keys(state).map(id => state[id]);
  return { decks };
};

export default connect(mapStateToProps)(DeckList);
