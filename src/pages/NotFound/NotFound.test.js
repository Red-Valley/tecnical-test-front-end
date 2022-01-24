import React from "react";
import { shallow } from "enzyme";

import NotFound from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<NotFound {...setupStore} />);
};

describe("Test for NotFound page", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
