import React from "react";
import { shallow } from "enzyme";

import Loader from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<Loader {...setupStore} />);
};

describe("Test for Loader component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
