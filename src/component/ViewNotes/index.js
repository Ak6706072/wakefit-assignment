import React from "react";
import AllNotes from "./AllNotes";
import "./ViewNotes.css";
function ViewNotes({ notes, setNotes }) {
  return (
    <div className="view-notes">
      {notes.map((note, index) => {
        return (
          <AllNotes
            key={"random" + index}
            id={note.id}
            noteText={note.noteText}
            noteDate={note.noteDate}
            isEditing={note.isEditing}
            notes={notes}
            setNotes={setNotes}
          />
        );
      })}
    </div>
  );
}

export default ViewNotes;
