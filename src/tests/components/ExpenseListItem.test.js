import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

it("should render ExpenseListItem", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
