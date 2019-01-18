import React from "react";
import { connect } from "react-redux";
// You could import all the filters actions like so
// import * as actionsFilters from '../actions/filters'
import {
    setTextFilter,
    filterByCurrency,
    setStartDate,
    setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import uuid from "uuid";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };
    onCurrencyChange = e => {
        this.props.filterByCurrency(e.target.value);
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search Expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.filterByCurrency}
                            onChange={this.onCurrencyChange}
                            className="select"
                        >
                            <option value="">All Currencies</option>
                            <option value="EUR">EUR</option>
                            <option value="DKK">DKK</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <div>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            startDateId={uuid()}
                            endDateId={uuid()}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
};

// I suggest giving a read at redux-actions, which would remove the redundancy of this code
// https://github.com/redux-utilities/redux-actions
// Example
// const mapDispatchToProps = {
//     setStartDate: actionsFilters.setStartDate,
//     setEndDate: actionsFilters.setEndDate,
//     setTextFilter: actionsFilters.setTextFilter,
//     filterByCurrency: actionsFilter.filterByCurrency
// }

const mapDispatchToProps = dispatch => ({
    setStartDate: startDate => {
        dispatch(setStartDate(startDate));
    },
    setEndDate: endDate => {
        dispatch(setEndDate(endDate));
    },
    setTextFilter: text => {
        dispatch(setTextFilter(text));
    },
    filterByCurrency: currencyCode => {
        dispatch(filterByCurrency(currencyCode));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseListFilters);
