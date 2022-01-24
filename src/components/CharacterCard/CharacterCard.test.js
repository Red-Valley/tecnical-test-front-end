import React from "react";
import { shallow } from "enzyme";

import CharacterCard from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<CharacterCard {...setupStore} />);
};

describe("Test for CharacterCard component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
