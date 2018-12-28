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

export const addReceipts = (expenseId, receipts = []) => ({
    type: "ADD_RECEIPTS",
    expenseId,
    receipts
});

export const startAddReceipts = expenseId => {
    return async dispatch => {
        const response = await API.get(`${expenseId}/`);
        const receipts = response.data.receipts;
        dispatch(addReceipts(expenseId, receipts));
    };
};

export const addComment = (expenseId, comment) => ({
    type: "ADD_COMMENT",
    expenseId,
    comment
});

export const startAddComment = (expenseId, comment) => {
    return async dispatch => {
        await API.post(`${expenseId}/`, {
            comment
        });
        dispatch(addComment(expenseId, comment));
    };
};
