import React, { useState } from "react";
import "./AddNoteStyle.css";

export const AddNote = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title of Note not provided");
    } else if (!desc) {
      alert("Add description ");
    } else {
      props.addNote(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <div className="new-note">
        <h2> Add Notes</h2>
        <div className="form-box">
          <form onSubmit={submit} className="d-flex">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control title-add font-weight-bold"
              placeholder="Title"
              id="title"
            />

            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control description-add font-weight-bold"
              id="desc"
              placeholder="Description"
            />
            <span>
              <button type="submit" className="btn btn-success add-btn">
                Add
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
