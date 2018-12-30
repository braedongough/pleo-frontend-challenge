//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

//SORT_BY_CURRENCY
export const filterByCurrency = currencyCode => ({
    type: "FILTER_BY_CURRENCY",
    currencyCode
});

//SET_START_DATE
export const setStartDate = startDate => ({
    type: "SET_START_DATE",
    startDate
});

//SET_END_DATE
export const setEndDate = endDate => ({
    type: "SET_END_DATE",
    endDate
});
