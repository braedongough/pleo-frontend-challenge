import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

it("should filter by text value", () => {
    const filters = {
        text: "ns",
        filterByCurrency: "",
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

it("should filter by  start date", () => {
    const filters = {
        text: "",
        filterByCurrency: "",
        startDate: moment(expenses[1].date).subtract(2, "days"),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual(expenses);
});

it("should filter by end date", () => {
    const filters = {
        text: "",
        filterByCurrency: "",
        startDate: undefined,
        endDate: moment(expenses[0].date).subtract(1, "days")
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[2]]);
});

it("should sort by currency", () => {
    const currencyCode = "EUR";
    const filters = {
        text: "",
        filterByCurrency: currencyCode,
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});
