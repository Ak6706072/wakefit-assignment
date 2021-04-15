import React, { useState } from "react";

function AllNotes({ notes, setNotes, id, noteText, noteDate, isEditing }) {
  const [notedata, setNoteText] = useState("");
  const [notedate, setNoteDate] = useState("");

  const noteEdit = () => {
    const index = notes.findIndex((note) => note.id == id);
    const allNotes = [...notes];
    allNotes.forEach((note) => {
      if (note.id == id) {
        note.isEditing = true;
      } else {
        note.isEditing = false;
      }
    });
    setNotes(allNotes);
    console.log(allNotes);
    setNoteText(noteText);
    setNoteDate(noteDate);
  };

  const noteDelete = (id) => {
    const index = notes.findIndex((note) => note.id == id);
    notes.splice(index, 1);
    setNotes([...notes]);
  };
  const saveNote = (id) => {
    console.log(notedata, notedate);
    const allNotes = [...notes];
    allNotes.forEach((note) => {
      if (note.id == id) {
        note.isEditing = false;
        note.noteText = notedata;
        note.noteDate = notedate;
      }
    });
    console.log(allNotes);
    setNotes(allNotes);
  };

  if (isEditing === false) {
    return (
      <div className="all-notes-header">
        <strong>{id}</strong>||
        <span>{noteText}</span>||
        <span>{noteDate}</span>||
        <button onClick={() => noteDelete(id)}>Delete</button>
        <button onClick={() => noteEdit(id)}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="all-notes-header">
        <strong>{id}</strong>||
        <input
          value={notedata}
          onChange={(e) => {
            setNoteText(e.target.value);
          }}
          type="text"
        />
        ||
        <input
          value={notedate}
          onChange={(e) => {
            setNoteDate(e.target.value);
          }}
          type="date"
        />
        ||
        <button onClick={() => noteDelete(id)}>Delete</button>
        <button onClick={() => saveNote(id)}>Save</button>
      </div>
    );
  }
}

export default AllNotes;
