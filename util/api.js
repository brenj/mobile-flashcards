import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'MobileFlashcards:decks';

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY);
}

export function saveDeckTitle(title) {
  // AsyncStorage.removeItem(STORAGE_KEY);
  const deck = {
    key: title, title, cardCount: 0, cards: [],
  };
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [title]: deck }));
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(STORAGE_KEY, (err, decks) => {
    const { cards, cardCount } = JSON.parse(decks)[title];

    // Add card to deck
    cards.push(card);

    return AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({ [title]: { cards, cardCount: cardCount + 1 } }),
    );
  });
}
