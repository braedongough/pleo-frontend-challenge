import API from "../api/api";

export const setExpenses = expenses => ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => {
    return async (dispatch, getState) => {
        const response = await API.get();
        dispatch(setExpenses(response.data));
    };
};
