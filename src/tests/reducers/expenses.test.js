import expensesReducer from "../../reducers/expenses";
import { setExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

describe("Expenses Reducer", () => {
    it("should set the default state", () => {
        const state = expensesReducer(undefined, { type: "@@INIT" });
        expect(state).toEqual([]);
    });
    it("should set expenses", () => {
        const initialState = [
            {
                fakeExpense: "asdfas"
            },
            {
                fakeExpense: "asdf"
            }
        ];
        const action = setExpenses(expenses);
        const state = expensesReducer(initialState, action);
        expect(state).toEqual(expenses);
        expect(state).not.toEqual(initialState);
    });
});
