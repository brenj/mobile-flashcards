import { StyleSheet } from 'react-native';

import { gray, gold } from './colors';

export default StyleSheet.create({
  centeredContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  mediumText: {
    fontSize: 20,
  },
  largeText: {
    fontSize: 30,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: 150,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: gold,
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
  textInput: {
    borderColor: gray,
    borderWidth: 1,
    height: 40,
    marginTop: 10,
    marginBottom: 25,
    width: 300,
  },
});
