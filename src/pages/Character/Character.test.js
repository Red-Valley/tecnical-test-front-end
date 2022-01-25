import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import Character from "./index";

const initialState = {
  character: {
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
        <Character {...setupStore} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for Character container", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test("Render with click in go back", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    const button = wrapper.find(".Character__button").at(0);
    button.simulate("click");
  });
  test("Render data without error", () => {
    const props = {
      character: {
        isSucces: true,
        data: {
          id: "123",
        },
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".CharacterDetail").at(0);
    expect(container.exists()).toBe(true);
  });

  test("Render loader without error", () => {
    const props = {
      character: {
        isLoading: true,
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".Loader").at(0);
    expect(container.exists()).toBe(true);
  });

  test("Render error without error", () => {
    const props = {
      character: {
        isError: true,
        errorDetail: "test",
      },
    };
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
    const container = wrapper.find(".Error").at(0);
    expect(container.exists()).toBe(true);
  });
});
