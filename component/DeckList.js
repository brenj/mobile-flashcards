import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import { receiveDecks } from '../action';
import DeckListItem from './DeckListItem';
import { getDecks } from '../util/api';

class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then(decks => (
      this.props.dispatch(receiveDecks(JSON.parse(decks))))
    );
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
  const decks = Object.keys(state.decks).map(id => state.decks[id]);
  return { decks };
};

export default connect(mapStateToProps)(DeckList);
