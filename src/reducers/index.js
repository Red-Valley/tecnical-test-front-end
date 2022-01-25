import {
  SET_DARK_MODE,
  GET_CHARACTER_LIST_LOADING,
  GET_CHARACTER_LIST_SUCCESS,
  GET_CHARACTER_LIST_ERROR,
  GET_CHARACTER_LOADING,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_ERROR,
} from "../types";

const initialState = {
  darkMode: true,
  characterList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
  character: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE: {
      return {
        ...state,
        darkMode: action.payload,
      };
    }
    case GET_CHARACTER_LIST_LOADING: {
      return {
        ...state,
        characterList: {
          isLoading: true,
          isSucces: false,
          isError: false,
          data: null,
          errorDetail: null,
        },
      };
    }
    case GET_CHARACTER_LIST_SUCCESS: {
      return {
        ...state,
        characterList: {
          isLoading: false,
          isSucces: true,
          isError: false,
          data: action.payload,
          errorDetail: null,
        },
      };
    }
    case GET_CHARACTER_LIST_ERROR: {
      return {
        ...state,
        characterList: {
          isLoading: false,
          isSucces: false,
          isError: true,
          data: null,
          errorDetail: action.payload,
        },
      };
    }
    case GET_CHARACTER_LOADING: {
      return {
        ...state,
        character: {
          isLoading: true,
          isSucces: false,
          isError: false,
          data: null,
          errorDetail: null,
        },
      };
    }
    case GET_CHARACTER_SUCCESS: {
      return {
        ...state,
        character: {
          isLoading: false,
          isSucces: true,
          isError: false,
          data: action.payload,
          errorDetail: null,
        },
      };
    }
    case GET_CHARACTER_ERROR: {
      return {
        ...state,
        character: {
          isLoading: false,
          isSucces: false,
          isError: true,
          data: null,
          errorDetail: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
