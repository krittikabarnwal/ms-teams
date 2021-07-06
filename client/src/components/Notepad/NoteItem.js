import React from "react";
import PropTypes from "prop-types";
import "./NoteItemStyle.css";

export default function NoteItem({ note, onDelete }) {
  return (
    <div className=" main-note-box">
      <div className="details">
        <h4 className="details-title  ">{note.title}</h4>
        <hr />
        <p className="details-desciption">{note.desc}</p>
        <button
          className="button del-btn py-1"
          onClick={() => {
            onDelete(note);
          }}
        >
          <span className="px-4 my-1">Delete</span>
          <i class="far fa-trash-alt border-left px-4 py-1"></i>
        </button>
      </div>
    </div>
  );
}
NoteItem.propTypes = {
  buttonsview: PropTypes.bool.isRequired,
};
