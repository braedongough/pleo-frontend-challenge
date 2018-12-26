import React from "react";
import { connect } from "react-redux";
import { startLoadExpenses } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";
//import selector

export class ExpenseList extends React.Component {
    state = {
        offset: 25
    };
    componentDidMount() {
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
    }
    handleScroll = e => {
        const lastLi = document.querySelector(
            "div#expense-list > div:last-child"
        );
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        let bottomOffset = 20;
        if (pageOffset > lastLiOffset - bottomOffset) this.loadExpenses();
    };
    loadExpenses = () => {
        this.props.dispatch(startLoadExpenses(this.state.offset));
        this.setState(prevState => ({
            offset: prevState.offset + 25
        }));
    };
    render() {
        return (
            <div>
                <div id="expense-list">
                    {this.props.expenses.map(expense => (
                        <ExpenseListItem key={expense.id} {...expense} />
                    ))}
                </div>
            </div>
        );
    }
}

//this is mapped to props because it will later be used in the
//selector when I implement the filters
const mapStateToProps = state => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);
