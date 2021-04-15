import React, { useState } from "react";
import CreateNotes from "./component/Notes";
import ViewNotes from "./component/ViewNotes";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <CreateNotes notes={notes} setNotes={setNotes} />

      <ViewNotes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
