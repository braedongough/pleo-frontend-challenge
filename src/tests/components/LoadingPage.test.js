import React from "react";
import { shallow } from "enzyme";
import { LoadingPage } from "../../components/LoadingPage";

it("should render LoadingPage correctly", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
