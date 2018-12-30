import React from "react";
import { FilePond } from "react-filepond";
import { connect } from "react-redux";
import { baseURL } from "../api/api";
import { startAddComment } from "../actions/expenses";
import NoteModal from "./NoteModal";

export class ExpenseListItem extends React.Component {
    state = {
        isOpen: false
    };
    handleAddNote = e => {
        e.preventDefault();
        const id = this.props.id;
        const comment = e.target.elements["comment-text"].value;
        this.props.dispatch(startAddComment(id, comment));
        this.setState({
            isOpen: false
        });
    };
    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
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
                    <button className="button" onClick={this.toggleModal}>
                        Add Note
                    </button>

                    <FilePond
                        allowMultiple={true}
                        instantUpload={true}
                        maxFiles={3}
                        server={`${baseURL}/${this.props.id}/receipts`}
                        name="receipt"
                    />
                </div>

                <NoteModal
                    isOpen={this.state.isOpen}
                    handleAddNote={this.handleAddNote}
                    toggleModal={this.toggleModal}
                />
            </div>
        );
    }
}

export default connect()(ExpenseListItem);
