import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import Home from "./index";

const initialState = {};

const setup = (props = {}) => {
  // const body = global.document.querySelector("body");
  // body.appendChild(global.document.createElement("div"));

  const setupStore = { ...initialState, ...props };
  const store = mockStore(setupStore);

  store.dispatch = jest.fn();

  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <Home {...setupStore} />
      </MemoryRouter>
    </Provider>
  );
};

describe("Test for Home page", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
