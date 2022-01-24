import React from "react";
import { shallow } from "enzyme";

import ButtonIcon from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<ButtonIcon {...setupStore} />);
};

describe("Test for ButtonIcon component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
