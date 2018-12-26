import configureMockStore from "redux-mock-store";
import mockAxios from "jest-mock-axios";
import thunk from "redux-thunk";
import { setExpenses, startSetExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

describe("SET_EXPENSES", () => {
    it("should setup setExpense action object", () => {
        const action = setExpenses(expenses);
        expect(action).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
    });

    it("should fetch the expenses from expense api", done => {
        const store = createMockStore({});
        store.dispatch(startSetExpenses()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "SET_EXPENSES",
                expenses: expect.any(Object)
            });
            done();
        });
    });
});
