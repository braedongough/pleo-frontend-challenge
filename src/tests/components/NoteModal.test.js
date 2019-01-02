import React from "react";
import { shallow } from "enzyme";
import NoteModal from "../../components/NoteModal";

it("should render note modal", () => {
    const wrapper = shallow(<NoteModal isOpen={true} />);
    expect(wrapper).toMatchSnapshot();
});
