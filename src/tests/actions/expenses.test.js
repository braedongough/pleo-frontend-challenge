import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    setExpenses,
    startSetExpenses,
    loadExpenses,
    startLoadExpenses,
    addReceipts,
    startAddReceipts,
    addComment,
    startAddComment
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
            const expenseId = expenses[0].id;
            const action = addReceipts(expenseId, receipts);
            expect(action).toEqual({
                type: "ADD_RECEIPTS",
                expenseId,
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
                    expenseId,
                    receipts: expect.any(Array)
                });
                done();
            });
        });
    });
    describe("ADD_COMMENT", () => {
        it("should setup addComment action object", () => {
            const expenseId = expenses[0].id;
            const comment = "this is the greatest comment ever";
            const action = addComment(expenseId, comment);
            expect(action).toEqual({
                type: "ADD_COMMENT",
                expenseId,
                comment
            });
        });
        it("should make post request to api with comment", done => {
            const store = createMockStore({});
            const expenseId = expenses[0].id;
            const comment = "this is the greatest comment ever";
            store.dispatch(startAddComment(expenseId, comment)).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: "ADD_COMMENT",
                    expenseId,
                    comment
                });
                done();
            });
        });
    });
});
