import React from "react";
import { shallow } from "enzyme";

import Pagination from "./index";

const defaultProps = {};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };

  return shallow(<Pagination {...setupStore} />);
};

describe("Test for Pagination component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
