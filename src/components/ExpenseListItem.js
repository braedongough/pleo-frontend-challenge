import React from "react";

export const ExpenseListItem = ({ merchant, user, amount }) => (
    <div>
        <h3>{merchant}</h3>
        <p>
            {user.first} {user.last}
        </p>
        <h4>
            {amount.value} {amount.currency}
        </h4>
    </div>
);

export default ExpenseListItem;
