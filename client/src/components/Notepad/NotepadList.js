import React, { useState, useEffect } from "react";
// import NotepadForm from "./NotepadForm";
// import Notepad from "./Notepad";
// import "./Notepad.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Notes from "./Notes";
import { AddNote } from "./AddNote";

function NotepadList() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = (note) => {
    // console.log("Deleted", note);

    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );

    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const addNote = (title, desc) => {
    let sno;
    if (notes.length === 0) {
      sno = 0;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setNotes([...notes, myNote]);
    console.log(myNote);
  };

  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <AddNote addNote={addNote} />
        <Notes notes={notes} onDelete={onDelete} buttonsview={"true"} />
      </div>
    </>
  );
}

export default NotepadList;
