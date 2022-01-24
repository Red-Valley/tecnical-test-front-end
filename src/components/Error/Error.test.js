import React from "react";
import { shallow } from "enzyme";

import Error from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<Error {...setupStore} />);
};

describe("Test for Error component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
