import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

export default ({ isOpen, handleAddNote, toggleModal }) => (
    <Modal isOpen={isOpen} contentLabel="Example Modal">
        <div>Add Note</div>
        <div>Under 150 characters</div>
        <form onSubmit={handleAddNote}>
            <textarea
                name="comment-text"
                placeholder="Add a note about this purchase"
                maxLength="150"
                className="text-area"
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

//Remember to take the modal fix out of the base style settings and move it into the model component setting file
