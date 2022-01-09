import { combineReducers } from "redux";

import { characterReducer, selectedCharacterReducer } from "./characterReducer";

export const reducers = combineReducers({
  allCharacters: characterReducer,
  selectedCharacter: selectedCharacterReducer,
});
