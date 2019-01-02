import moment from "moment";

export const filters = {
    text: "",
    filterByCurrency: "",
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: "KAGE",
    filterByCurrency: "EUR",
    startDate: moment("2017-05-30T14:12:31.054Z").subtract(1, "day"),
    endDate: moment("2017-06-21T08:45:09.326Z").subtract(1, "day")
};
