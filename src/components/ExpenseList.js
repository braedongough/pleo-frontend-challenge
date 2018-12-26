import React from "react";
import { connect } from "react-redux";
import { startLoadExpenses } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";
//import selector

export const ExpenseList = ({ expenses, loadExpenses }) => {
    console.log(expenses[0]);
    return (
        <div>
            {expenses.map(expense => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))}
            <a onClick={loadExpenses}>Load more</a>
        </div>
    );
};

const mapStateToProps = state => ({
    expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
    loadExpenses: () => {
        dispatch(startLoadExpenses());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseList);
