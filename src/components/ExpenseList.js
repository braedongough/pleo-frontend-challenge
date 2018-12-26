import React from "react";
import { connect } from "react-redux";
import { startLoadExpenses } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";
//import selector

export class ExpenseList extends React.Component {
    state = {
        offset: 25
    };
    loadExpenses = () => {
        console.log(this.state.offset);
        this.props.dispatch(startLoadExpenses(this.state.offset));
        this.setState(prevState => ({
            offset: prevState.offset + 25
        }));
    };
    render() {
        return (
            <div>
                {this.props.expenses.map(expense => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))}
                <a onClick={this.loadExpenses}>Load more</a>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);
