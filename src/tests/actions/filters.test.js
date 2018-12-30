import {
    setStartDate,
    setEndDate,
    sortByCurrency,
    setTextFilter
} from "../../actions/filters";
import moment from "moment";

it("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

it("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

it("should generate sort by sortByCurrency action object", () => {
    const currencyCode = "EUR";
    const action = sortByCurrency(currencyCode);
    expect(action).toEqual({
        type: "SORT_BY_CURRENCY",
        currencyCode
    });
});

it("should generate set text filter action object", () => {
    const action = setTextFilter("butt");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "butt"
    });
});

it("should generate set text filter action object with default values", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});
