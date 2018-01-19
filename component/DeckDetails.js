import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { clearNotification, setNotification } from '../util/notifications';
import globalStyles from '../util/styles';

function DeckDetails(props) {
  const { navigation } = props;
  const { title, cardCount } = props.deck || {};

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.largeText}>{title}</Text>
      <Text
        style={[globalStyles.largeText, { paddingBottom: 50 }]}
      >
        {`${cardCount} cards`}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewCard', { title })}
        style={globalStyles.primaryButton}
      >
        <Text>Add Card</Text>
      </TouchableOpacity>
      {
        cardCount !== 0 &&
          <TouchableOpacity
            onPress={() => {
              // Reset notification since a quiz was started
              clearNotification().then(setNotification);
              navigation.navigate('Quiz', { title });
            }}
            style={globalStyles.secondaryButton}
          >
            <Text>Start Quiz</Text>
          </TouchableOpacity>
      }
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks[ownProps.navigation.state.params.title];
  return { deck };
};

export default connect(mapStateToProps)(DeckDetails);
