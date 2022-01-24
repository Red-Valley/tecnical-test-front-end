import React from "react";
import { shallow } from "enzyme";

import Layout from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<Layout {...setupStore} />);
};

describe("Test for Layout container", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
