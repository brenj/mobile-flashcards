import { combineReducers } from 'redux';

import decksReducer from './decks';
import quizReducer from './quiz';

export default combineReducers({
  decks: decksReducer,
  quiz: quizReducer,
});
