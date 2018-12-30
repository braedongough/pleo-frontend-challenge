import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import Header from "./Header";

export const DashboardPage = () => (
    <div>
        <Header />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;
