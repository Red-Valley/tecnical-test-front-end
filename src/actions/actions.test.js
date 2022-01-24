import * as actions from "./index";

import {
  SET_DARK_MODE,
  GET_CHARACTER_LIST_LOADING,
  GET_CHARACTER_LIST_SUCCESS,
  GET_CHARACTER_LIST_ERROR,
} from "../types";

describe("Test for Actions", () => {
  test("Should call setDarkModeAction", () => {
    const payload = true;
    const expected = {
      type: SET_DARK_MODE,
      payload,
    };
    expect(actions.setDarkModeAction(payload)).toEqual(expected);
  });

  test("Should call getCharacterListSteps request", () => {
    const expected = {
      type: GET_CHARACTER_LIST_LOADING,
    };
    expect(actions.getCharacterListSteps.request()).toEqual(expected);
  });

  test("Should call getCharacterListSteps success", () => {
    const payload = {
      data: true,
    };
    const expected = {
      type: GET_CHARACTER_LIST_SUCCESS,
      payload: payload.data,
    };
    expect(actions.getCharacterListSteps.success(payload)).toEqual(expected);
  });

  test("Should call getCharacterListSteps error", () => {
    const payload = "test";
    const expected = {
      type: GET_CHARACTER_LIST_ERROR,
      payload: payload,
    };
    expect(actions.getCharacterListSteps.error(payload)).toEqual(expected);
  });

  test("Should call getCharacterListAction", () => {
    const payload = {
      api: "test",
    };
    const dispatch = jest.fn();
    actions.getCharacterListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
