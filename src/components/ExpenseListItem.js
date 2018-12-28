import React from "react";
import { FilePond, File } from "react-filepond";
import { connect } from "react-redux";
import { baseURL } from "../api/api";
import { startAddComment } from "../actions/expenses";
import NoteModal from "./NoteModal";

export class ExpenseListItem extends React.Component {
    state = {
        isOpen: false
    };
    handleAddNote = e => {
        this.props.dispatch(startAddComment(this.props.id, e.target.value));
        this.setState({
            isOpen: false
        });
        console.log(this.props.comment);
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
                <NoteModal
                    isOpen={this.state.isOpen}
                    handleAddNote={this.handleAddNote}
                />
            </div>
        );
    }
}

export default connect()(ExpenseListItem);

//figure out if I can add a body to the post request that goes out through FilePond to get the receipt information to persist, similar to how I added the body object to the post req for note.
