import React from "react";
import { FilePond, File } from "react-filepond";
import { connect } from "react-redux";
import { baseURL } from "../api/api";
import NodeModal from "./NoteModal";
import NoteModal from "./NoteModal";

export class ExpenseListItem extends React.Component {
    state = {
        isOpen: false
    };
    openModal = () => {
        this.setState({
            isOpen: true
        });
    };
    render() {
        return (
            <div className="list-item">
                <h3>{this.props.merchant}</h3>
                <p>
                    {this.props.user.first} {this.props.user.last}
                </p>
                <h4>
                    {this.props.amount.value} {this.props.amount.currency}
                </h4>
                <p>note: {this.props.comment}</p>

                <div>
                    <button className="button" onClick={this.openModal}>
                        Add Note
                    </button>

                    <FilePond
                        allowMultiple={true}
                        maxFiles={3}
                        server={`${baseURL}/${this.props.id}/receipts`}
                        name="receipt"
                    />
                </div>
                <NoteModal isOpen={this.state.isOpen} />
            </div>
        );
    }
}

export default connect()(ExpenseListItem);

//Add modal so that notes can be added to an expense. Currently FilePond hovers above modal when open. Inspect CSS in console to see what might be causing this.

//figure out if I can add a body to the post request that goes out through FilePond to get the receipt information to persist, similar to how I added the body object to the post req for note.
