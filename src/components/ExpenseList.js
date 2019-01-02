import React from "react";
import { connect } from "react-redux";
import { startLoadExpenses } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export class ExpenseList extends React.Component {
    state = {
        offset: 0,
        scrolling: false
    };
    componentDidMount() {
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
    }
    handleScroll = e => {
        if (this.props.expenses.length < this.state.offset) return;
        if (this.state.scrolling) return;
        const lastLi = document.querySelector(
            "div#expense-list > div:last-child"
        );
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        let bottomOffset = 20;
        if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    };
    loadExpenses = () => {
        this.props.dispatch(startLoadExpenses(this.state.offset));
        this.setState({
            scrolling: false
        });
    };
    loadMore = () => {
        this.setState(prevState => {
            return {
                offset: prevState.offset + 25,
                scrolling: true
            };
        }, this.loadExpenses);
    };
    render() {
        return (
            <div className="content-container">
                <div className="list-body" id="expense-list">
                    {this.props.expenses.length === 0 ? (
                        <div className="list-item--message">
                            <span>No Expenses</span>
                        </div>
                    ) : (
                        this.props.expenses.map(expense => {
                            return (
                                <ExpenseListItem
                                    key={expense.id}
                                    {...expense}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
