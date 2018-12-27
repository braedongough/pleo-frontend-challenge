import expensesReducer from "../../reducers/expenses";
import { setExpenses, loadExpenses, addReceipts } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import receipts from "../fixtures/receipts";

let initialState;

beforeEach(() => {
    initialState = [
        {
            id: "5b995dffc08493ea1bfbb685",
            amount: {
                value: "482.33",
                currency: "GBP"
            },
            date: "2018-01-14T22:38:10.896Z",
            merchant: "MOBILDATA",
            receipts: [],
            comment: "",
            category: "",
            user: {
                first: "Selena",
                last: "Mcmillan",
                email: "selena.mcmillan@pleo.io"
            },
            index: 23
        },
        {
            id: "5b9960647eb83b6e4179936d",
            amount: {
                value: "3960.71",
                currency: "GBP"
            },
            date: "2018-01-14T12:04:38.077Z",
            merchant: "HOUSEDOWN",
            receipts: [],
            category: "",
            comment: "",
            user: {
                first: "Marie",
                last: "Olsen",
                email: "marie.olsen@pleo.io"
            },
            index: 24
        }
    ];
});

describe("Expenses Reducer", () => {
    it("should set the default state", () => {
        const state = expensesReducer(undefined, { type: "@@INIT" });
        expect(state).toEqual([]);
    });

    it("should set expenses", () => {
        const action = setExpenses(expenses);
        const state = expensesReducer(initialState, action);
        expect(state).toEqual(expenses);
        expect(state).not.toEqual(initialState);
    });

    it("should load new expenses", () => {
        const action = loadExpenses(expenses);
        const state = expensesReducer(initialState, action);
        expect(state).toEqual([...initialState, ...action.newExpenses]);
    });

    it("should set receipts on expense", () => {
        const id = initialState[0].id;
        const receipt = [receipts[0]];
        const action = addReceipts(id, receipt);
        const state = expensesReducer(initialState, action);
        expect(state[0].receipts).toEqual(receipt);
    });
});
