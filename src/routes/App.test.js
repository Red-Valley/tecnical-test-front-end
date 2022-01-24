import React from "react";
import { shallow } from "enzyme";

import App from "./App";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<App {...setupStore} />);
};

describe("Test for App", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
