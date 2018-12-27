const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_EXPENSES":
            return action.expenses;
        case "LOAD_EXPENSES":
            return [...state, ...action.newExpenses];
        case "ADD_RECEIPTS":
            return state.map(expense => {
                if (expense.id === action.expenseId) {
                    return {
                        ...expense,
                        receipts: [...expense.receipts, ...action.receipts]
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
