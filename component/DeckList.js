import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import AppStatusBar from './AppStatusBar';
import { receiveDecks } from '../action';
import DeckListItem from './DeckListItem';
import { getDecks } from '../util/api';

const propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  receiveDecksDispatcher: PropTypes.func.isRequired,
};

class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then(decks => (
      this.props.receiveDecksDispatcher(JSON.parse(decks))));
  }

  render() {
    const { decks, navigation } = this.props;

    return (
      <View>
        <AppStatusBar />
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <DeckListItem deck={item} navigation={navigation} />)}
        />
      </View>
    );
  }
}

DeckList.propTypes = propTypes;

const mapStateToProps = (state) => {
  const decks = Object.keys(state.decks).map(id => state.decks[id]);
  return { decks };
};

export default connect(
  mapStateToProps, { receiveDecksDispatcher: receiveDecks })(DeckList);
