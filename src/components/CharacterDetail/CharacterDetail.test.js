import React from "react";
import { shallow } from "enzyme";

import CharacterDetail from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<CharacterDetail {...setupStore} />);
};

describe("Test for CharacterDetail component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
