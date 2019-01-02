import React from "react";
import Modal from "react-modal";

export default ({ isOpen, handleAddNote, toggleModal, noteText }) => (
    <Modal
        isOpen={isOpen}
        contentLabel="Note Modal"
        closeTimeoutMS={200}
        className="modal"
    >
        <div className="modal__title">Add Note</div>
        <div>Under 150 characters</div>
        <form onSubmit={handleAddNote} className="form">
            <textarea
                name="comment-text"
                placeholder="Add a note about this purchase"
                maxLength="150"
                className="text-area"
                defaultValue={noteText}
            />
            <button className="button">Confirm</button>
            <button
                className="button--secondary"
                type="button"
                onClick={toggleModal}
            >
                Cancel
            </button>
        </form>
    </Modal>
);
