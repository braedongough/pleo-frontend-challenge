//Filters Reducer
const filtersReducerDefaultState = {
    text: "",
    filterByCurrency: "",
    startDate: null,
    endDate: null
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "FILTER_BY_CURRENCY":
            return {
                ...state,
                filterByCurrency: action.currencyCode
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};
