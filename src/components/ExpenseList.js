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

    // Nice one!
    // There is a bit of a simpler way to do this, check out our expense list component
    // onScroll = async () => {
    //     const {fetching, total, expenses} = this.props
    //     if (
    //         !fetching &&
    //         total > expenses.length &&
    //         this.scrollListRef &&
    //         this.scrollListRef.clientHeight + this.scrollListRef.scrollTop + 600 >=
    //             this.scrollListRef.scrollHeight
    //     ) {
    //         this.props.nextPage()
    //     }
    // }
    handleScroll = () => {
        // Try to never use this syntax for IFs,
        // it's easy to make mistakes and adding something else in the next line, thinking it's still in the IF
        // Do like this: (always)
        // You could have combined those two IFs
        if (this.props.expenses.length < this.state.offset || this.state.scrolling) {
            return;
        }
        const lastLi = document.querySelector(
            "div#expense-list > div:last-child"
        );
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        let bottomOffset = 20;
        if (pageOffset > lastLiOffset - bottomOffset) { 
            this.loadMore();
        }
    };
    loadExpenses = () => {
        this.props.dispatch(startLoadExpenses(this.state.offset));
        this.setState({
            scrolling: false
        });
    };
    loadMore = () => {
        // Good use of update state from a previous state 💪
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
                <div className="list-header">
                    <div>Expenses</div>
                </div>
                <div className="list-body" id="expense-list">
                    {this.props.expenses.length === 0 ? (
                        // This can seem very sublte bit this should be in it's own file, as a standalone component
                        // (Try to make things a small and reusable as possible)
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

// Good use of the selectors
const mapStateToProps = state => ({
    // selectore usualy take the whole state though, then pull from it.
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
