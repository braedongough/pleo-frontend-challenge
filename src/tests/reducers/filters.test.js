import filtersReducer from "../../reducers/filters";
import moment from "moment";

it("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        filterByCurrency: "",
        startDate: null,
        endDate: null
    });
});

it("should set filterByCurrency to EUR", () => {
    const currency = "EUR";
    const currentState = {
        text: "",
        startDate: null,
        endDate: null,
        filterByCurrency: "DKK"
    };
    const action = { type: "FILTER_BY_CURRENCY", currencyCode: currency };
    const state = filtersReducer(currentState, action);
    expect(state.filterByCurrency).toBe("EUR");
});

it("should set text filter", () => {
    const state = filtersReducer(undefined, {
        type: "SET_TEXT_FILTER",
        text: "butt"
    });
    expect(state.text).toBe("butt");
});

it("should set startDate filter", () => {
    const state = filtersReducer(undefined, {
        type: "SET_START_DATE",
        startDate: moment(0)
    });
    expect(state.startDate).toEqual(moment(0));
});

it("should set endDate filter", () => {
    const state = filtersReducer(undefined, {
        type: "SET_END_DATE",
        endDate: moment(0)
    });
    expect(state.endDate).toEqual(moment(0));
});
