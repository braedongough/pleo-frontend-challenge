import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import Header from "./Header";

export default () => (
    <div>
        <Header />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
