import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, filterByCurrency, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    filterByCurrency = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            filterByCurrency={filterByCurrency}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

it("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

it("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

it("should handle text change", () => {
    const value = "pleo";
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it("should sort by currency", () => {
    const value = "EUR";
    wrapper.find("select").simulate("change", {
        target: { value }
    });
    expect(filterByCurrency).toHaveBeenCalled();
});

it("should handle date changes", () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

it("should handle date focus change", () => {
    const calendarFocused = "startDate";
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
        calendarFocused
    );
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
