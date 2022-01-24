import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import CharacterList from "./index";

const initialState = {
  characterList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    errorDetail: null,
  },
};

const setup = (props = {}) => {
  const setupStore = { ...initialState, ...props };
  const store = mockStore(setupStore);

  store.dispatch = jest.fn();

  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <CharacterList {...setupStore} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for CharacterList container", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test("Render with data", () => {
    const props = {
      ...initialState,
      characterList: {
        ...initialState.characterList,
        isSucces: true,
        data: {
          results: [
            {
              id: 123,
              key: 123,
              name: "test",
            },
          ],
        },
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".CharacterCard").at(0);
    expect(container.key()).toEqual("123")
  });
});
