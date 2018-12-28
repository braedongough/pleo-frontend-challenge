import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

export default ({ isOpen, handleAddNote }) => (
    <Modal isOpen={isOpen} contentLabel="Example Modal">
        <div>Add Note</div>
        <div>Under 150 characters</div>
        <textarea
            placeholder="Add a note about this purchase"
            maxLength="150"
            className="text-area"
        />
        <button className="button" onClick={handleAddNote}>
            Confirm
        </button>
        <button className="button--secondary">Cancel</button>
    </Modal>
);

//Remember to take the modal fix out of the base style settings and move it into the model component setting file
