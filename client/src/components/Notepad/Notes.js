import React from "react";
import NoteItem from "./NoteItem";
// import { ImageBackground } from 'react-native'
import "./NotesStyle.css";

export default function Notes(props) {
  return (
    <>
      <div>
        <h3 className="text-centre">Saved Notes</h3>
        <div className="d-flex note-display-box ml-5">
          {props.notes.length === 0
            ? ""
            : props.notes.map((note) => {
                return (
                  <NoteItem
                    note={note}
                    key={note.sno}
                    onDelete={props.onDelete}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}
