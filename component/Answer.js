import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import globalStyles from '../util/styles';

const propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

function Answer(props) {
  const { answer } = props.navigation.state.params;

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.mediumText}>{answer}</Text>
    </View>
  );
}

Answer.propTypes = propTypes;

export default Answer;
