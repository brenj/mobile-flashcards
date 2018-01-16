import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../action';

function decksReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_CARD: {
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          cards: [...state[title].cards, card],
          cardCount: state[title].cardCount + 1,
        },
      };
    }
    default:
      return state;
  }
}

export default decksReducer;
