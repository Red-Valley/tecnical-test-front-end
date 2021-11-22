import {
  GET_ALLCHARACTERS,
  GET_ALLCHARACTERS_SUCCESS,

  GET_SIGLE_CHARACTER,
  GET_SINGLE_CHARACTER_SUCCESS,

  SEARCH_CARACTER,
  SEARCH_CHARACTER_SUCCESS,

  GET_PAGINATION,
  GET_PAGINATION_SUCCESS,
  GET_PAGINATION_ERROR
} from '../types'

const initialState = {
  characters: [],
  character: [],
  searchError: false,
  loading: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALLCHARACTERS:
    case GET_SIGLE_CHARACTER:
    case SEARCH_CARACTER:
    case GET_PAGINATION:
      return {
        ...state,
        loading: action.payload
      }
    case GET_ALLCHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload

      }
    case GET_SINGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.payload
      }
    case SEARCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload
      }
    case GET_PAGINATION_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload
      }
    case GET_PAGINATION_ERROR:
      return {
        ...state,
        loading: false,
        searchError: action.payload
      }
    default:
      return state
  }
}