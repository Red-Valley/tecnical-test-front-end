import axios from "axios";

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

export const getCharacterListAction = (payload) => async (dispatch) => {
  dispatch({
    type: GET_CHARACTER_LIST_LOADING,
  });

  try {
    const API = "https://rickandmortyapi.com/api/character";
    const response = await axios.get(API);

    dispatch({
      type: GET_CHARACTER_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTER_LIST_ERROR,
      payload: `Algo salio mal con los comentarios, por favor inteta más tarde. Detalle: ${error.message}`,
    });
  }
};
