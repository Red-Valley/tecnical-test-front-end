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
  // getCharacterList: jest.fn(),
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
    expect(container.key()).toEqual("123");
  });

  test("Render with data and pages", () => {
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
          info: {
            count: 826,
            pages: 42,
            next: "https://rickandmortyapi.com/api/character/?page=3",
            prev: "https://rickandmortyapi.com/api/character/?page=1",
          },
        },
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const buttonLeft = wrapper.find(".ButtonIcon.alignRevert").at(0);
    const buttonRigth = wrapper.find(".ButtonIcon").at(1);

    buttonLeft.simulate("click");
    buttonRigth.simulate("click");

    // expect(initialState.getCharacterList).toBeCalled();
  });

  test("Render loading without error ", () => {
    const props = {
      ...initialState,
      characterList: {
        ...initialState.characterList,
        isLoading: true,
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".Loader").at(0);
    expect(container.exists()).toBe(true);
  });
  test("Render error without error ", () => {
    const props = {
      ...initialState,
      characterList: {
        ...initialState.characterList,
        isError: true,
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".Error").at(0);
    expect(container.exists()).toBe(true);
  });

  test("Render with searchValue", () => {
    const props = {
      searchValue: "test test",
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
  });

  test("Render with data and click in character", () => {
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
    const container = wrapper.find(".CharacterCard").at(0);
    container.simulate("click");
    expect(wrapper.exists()).toBe(true);
  });
});
