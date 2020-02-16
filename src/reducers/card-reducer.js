import { cards as defaultCards } from "../normalized-state";

const cardsReducer = (cards = defaultCards, action) => {
  return cards;
};

export default cardsReducer;
