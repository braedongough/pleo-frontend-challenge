import React from "react";
import { connect } from "react-redux";
//import selector

export const ExpenseList = ({ expenses }) => (
    <div>
        {expenses.length > 0 ? (
            <p>There are expenses</p>
        ) : (
            <p>Loading Expenses</p>
        )}
    </div>
);

const mapStateToProps = state => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);
