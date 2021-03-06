import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";

describe("Keypad", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it("should render 4 <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });
});
