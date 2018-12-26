const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_EXPENSES":
            return action.expenses;
        default:
            return state;
    }
};
