import API from "../api/api";

export const setExpenses = expenses => ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => {
    return async dispatch => {
        const response = await API.get();
        dispatch(setExpenses(response.data.expenses));
    };
};

export const loadExpenses = newExpenses => ({
    type: "LOAD_EXPENSES",
    newExpenses
});

export const startLoadExpenses = offset => {
    return async dispatch => {
        const response = await API.get(`?offset=${offset}`);
        dispatch(loadExpenses(response.data.expenses));
    };
};
