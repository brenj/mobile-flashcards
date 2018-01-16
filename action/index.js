export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RECORD_QUIZ_RESULT = 'RECORD_QUIZ_RESULT';
export const RESET_QUIZ_RESULTS = 'RESET_QUIZ_RESULTS';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  };
}

export function recordQuizResult(result) {
  return {
    type: RECORD_QUIZ_RESULT,
    result,
  };
}

export function resetQuizResults() {
  return {
    type: RESET_QUIZ_RESULTS,
  };
}
