import React from "react";
import { FilePond } from "react-filepond";
import { connect } from "react-redux";
import moment from "moment";
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
        // Ideally your Modal would send you back the value of the promt,
        // It's not ExpenseListItem's responsibility to pull in the internals of the modal
        // Read up on the "Tell, don't ask" principle
        // https://martinfowler.com/bliki/TellDontAsk.html
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
                <div>
                    <h3 className="list-item__title">{this.props.merchant}</h3>
                    <p className="list-item__sub-title">
                        {this.props.user.first} {this.props.user.last}
                    </p>
                    <p className="list-item__sub-title">
                        {moment(this.props.date).format("MMMM Do, YYYY")}
                    </p>
                </div>
                <div>
                    <h4 className="list-item__data">
                        {this.props.amount.value} {this.props.amount.currency}
                    </h4>
                    <h5 className="list-item__note-title">
                        note:
                        {this.props.comment && (
                            <span
                                className="list-item__note"
                                onClick={this.toggleModal}
                            >
                                {this.props.comment.length > 25
                                    ? this.props.comment.slice(0, 24) + "..."
                                    : this.props.comment}
                            </span>
                        )}
                    </h5>
                </div>

                <div>
                    <button className="button" onClick={this.toggleModal}>
                        Add Note
                    </button>

                    {/*
                    I think it would be a good exercice for you to try and build your own file upload component here
                    */}
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
                    noteText={this.props.comment}
                />
            </div>
        );
    }
}

// Why connect if there's nothing to connect ;)
export default connect()(ExpenseListItem);
