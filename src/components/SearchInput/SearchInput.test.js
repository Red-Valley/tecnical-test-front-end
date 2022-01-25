import React from "react";
import { shallow, mount } from "enzyme";

import SearchInput from "./index";

const defaultProps = {
  setSearchValue: jest.fn(),
};

const setup = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };
  return shallow(<SearchInput {...setupStore} />);
};

const setupMount = (props = {}) => {
  const setupStore = { ...defaultProps, ...props };
  return mount(<SearchInput {...setupStore} />);
};

describe("Test for SearchInput component", () => {
  test("Render without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test("Render without error", () => {
    const wrapper = setupMount();
    const input = wrapper.find("input.SearchInput__input").at(0);
    input.simulate("change", { target: { value: "test" } });
    expect(wrapper.exists()).toBe(true);
    expect(defaultProps.setSearchValue).toHaveBeenCalled();
  });
});
