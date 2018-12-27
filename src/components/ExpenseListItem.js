import React from "react";
import { FilePond, File } from "react-filepond";
import { baseURL } from "../api/api";

export const ExpenseListItem = ({ merchant, user, amount, comment, id }) => (
    <div className="list-item">
        <h3>{merchant}</h3>
        <p>
            {user.first} {user.last}
        </p>
        <h4>
            {amount.value} {amount.currency}
        </h4>
        <p>note: {comment}</p>
        <div>
            <button className="button">Add Note</button>
            <FilePond
                allowMultiple={true}
                maxFiles={3}
                server={`${baseURL}/${id}/receipts`}
                name="receipt"
            />
        </div>
    </div>
);

export default ExpenseListItem;

//add note to expense
