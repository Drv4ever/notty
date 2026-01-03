import { useState, useEffect } from "react";
import EditorContainer from "./editor-container";

function App() {
  const [activeTag, setActiveTag] = useState("untagged");

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Polar Bear",
      content: "The largest bear in the world and Arctic predator.",
      tag: "today",
    },
    {
      id: 2,
      title: "My green friends",
      content: "Tracking my house plants 🌱",
      tag: "untagged",
    },
    {
      id: 3,
      title: "Coding 101",
      content: "Swift basics and syntax.",
      tag: "untagged",
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(notes[0]);

  // update note (SAVE)
  const updateNote = (id, newTitle, newContent) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title: newTitle, content: newContent }
          : note
      )
    );

    setSelectedNote((prev) =>
      prev && prev.id === id
        ? { ...prev, title: newTitle, content: newContent }
        : prev
    );
  };

  const filteredNotes = notes.filter((note) => note.tag === activeTag);

  useEffect(() => {
    setSelectedNote(filteredNotes[0] || null);
  }, [activeTag]);

  return (
    <div className="main-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">NOTTY</h2>

        <ul className="tags">
          <li
            className={activeTag === "untagged" ? "active" : ""}
            onClick={() => setActiveTag("untagged")}
          >
            Untagged
          </li>

          <li
            className={activeTag === "today" ? "active" : ""}
            onClick={() => setActiveTag("today")}
          >
            Today
          </li>
        </ul>
      </aside>

      {/* NOTES LIST */}
      <section className="notes-panel">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className={`note-card ${
              selectedNote?.id === note.id ? "active" : ""
            }`}
            onClick={() => setSelectedNote(note)}
          >
            <h4>{note.title}</h4>
            <p>{note.content.slice(0, 40)}...</p>
          </div>
        ))}
      </section>

      {/* EDITOR */}
      {selectedNote && (
        <EditorContainer note={selectedNote} onSave={updateNote} />
      )}
    </div>
  );
}

export default App;
