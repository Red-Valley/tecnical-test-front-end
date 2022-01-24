
import { apiRequest } from "../utils/apiRequest";

import {
  SET_DARK_MODE,
  GET_CHARACTER_LIST_LOADING,
  GET_CHARACTER_LIST_SUCCESS,
  GET_CHARACTER_LIST_ERROR,
} from "../types";

export const setDarkModeAction = (payload) => ({
  type: SET_DARK_MODE,
  payload,
});

export const getCharacterListSteps = {
  request: () => ({
    type: GET_CHARACTER_LIST_LOADING,
  }),
  success: (payload) => ({
    type: GET_CHARACTER_LIST_SUCCESS,
    payload: payload.data,
  }),
  error: (error) => ({
    type: GET_CHARACTER_LIST_ERROR,
    payload: error,
  }),
};

export const getCharacterListAction = (payload) => (dispatch) => {
  apiRequest(dispatch, getCharacterListSteps, payload.api);
};
