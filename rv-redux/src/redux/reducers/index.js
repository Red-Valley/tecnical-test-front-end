import { combineReducers } from "redux";

import {
  characterReducer,
  selectedCharacterReducer,
  searchCharactersReducer,
} from "./characterReducer";

export const reducers = combineReducers({
  allCharacters: characterReducer,
  selectedCharacter: selectedCharacterReducer,
  searchCharacters: searchCharactersReducer,
});
