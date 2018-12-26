import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
//import selector

export const ExpenseList = ({ expenses }) => {
    console.log(expenses[0]);
    return (
        <div>
            {expenses.map(expense => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);
