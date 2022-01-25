import reducer from "./index";

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

describe("Test for Reducers", () => {
  test("Should return default state", () => {
    expect(reducer({}, "")).toEqual({});
  });
  test("Should return initial state", () => {
    expect(reducer(undefined, "")).toEqual(initialState);
  });
  test("Should set dark mode", () => {
    const payload = false;
    const action = {
      type: SET_DARK_MODE,
      payload,
    };
    const expected = {
      ...initialState,
      darkMode: false,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character list loading", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_LIST_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      characterList: {
        isLoading: true,
        isSucces: false,
        isError: false,
        data: null,
        errorDetail: null,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character list success", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,

      characterList: {
        isLoading: false,
        isSucces: true,
        isError: false,
        data: {},
        errorDetail: null,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character list error", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_LIST_ERROR,
      payload,
    };
    const expected = {
      ...initialState,

      characterList: {
        isLoading: false,
        isSucces: false,
        isError: true,
        data: null,
        errorDetail: {},
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character loading", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      character: {
        isLoading: true,
        isSucces: false,
        isError: false,
        data: null,
        errorDetail: null,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character success", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,

      character: {
        isLoading: false,
        isSucces: true,
        isError: false,
        data: {},
        errorDetail: null,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test("Should get character error", () => {
    const payload = {};
    const action = {
      type: GET_CHARACTER_ERROR,
      payload,
    };
    const expected = {
      ...initialState,

      character: {
        isLoading: false,
        isSucces: false,
        isError: true,
        data: null,
        errorDetail: {},
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
