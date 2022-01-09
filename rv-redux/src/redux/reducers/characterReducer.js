import { ActionTypes } from "../constants/actions-types";

const initialState = {
  characters: [],
};

export const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};

export const selectedCharacterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_CHARACTER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
