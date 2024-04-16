import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState(
    !localStorage.getItem("react-notes-app-data")
      ? [
          {
            key: nanoid(),
            id: nanoid(),
            heading: "Hello!",
            text: "This is a dummy note",
          },
        ]
      : JSON.parse(localStorage.getItem("react-notes-app-data"))
  );
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   };
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, heading) => {
    const newNote = {
      key: nanoid(),
      id: nanoid(),
      text: text,
      heading: heading,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <>
      <div className="notes">
        <div className="notes-heading">Notes</div>
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        {/* prop-drilling (context api alternative)^ */}
      </div>
    </>
  );
};

export default App;
