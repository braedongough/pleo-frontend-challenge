import configureMockStore from "redux-mock-store";
import mockAxios from "jest-mock-axios";
import thunk from "redux-thunk";
import {
    setExpenses,
    startSetExpenses,
    loadExpenses,
    startLoadExpenses,
    addReceipts,
    startAddReceipts
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import receipts from "../fixtures/receipts";

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

    describe("LOAD_EXPENSES", () => {
        it("should setup loadExpense action object", () => {
            const action = loadExpenses(expenses);
            expect(action).toEqual({
                type: "LOAD_EXPENSES",
                newExpenses: expenses
            });
        });
        it("should fetch the new expenses from the api", done => {
            const store = createMockStore({});
            store.dispatch(startLoadExpenses()).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: "LOAD_EXPENSES",
                    newExpenses: expect.any(Object)
                });
                done();
            });
        });
    });

    describe("ADD_RECEIPTS", () => {
        it("should setup addReceipts action object", () => {
            const action = addReceipts(receipts);
            expect(action).toEqual({
                type: "ADD_RECEIPTS",
                receipts
            });
        });
        it("should fetch receipt data from api after receipt has been posted", done => {
            const store = createMockStore({});
            const expenseId = expenses[0].id;
            store.dispatch(startAddReceipts(expenseId)).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: "ADD_RECEIPTS",
                    receipts: expect.any(Array)
                });
                done();
            });
        });
    });
});
