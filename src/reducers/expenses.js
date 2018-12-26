const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_EXPENSES":
            return action.expenses;
        case "LOAD_EXPENSES":
            return [...state, ...action.newExpenses];

        default:
            return state;
    }
};
