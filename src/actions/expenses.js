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

export const startLoadExpenses = () => {
    return async dispatch => {
        let offset = 25;
        const response = await API.get(`?offset=${offset}`);
        offset += 25;
        dispatch(loadExpenses(response.data.expenses));
    };
};
