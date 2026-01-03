import { useEffect, useState } from "react";

function EditorContainer({ note, onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setIsOpen(false);
    }
  }, [note]);

  const buttonHandler = () => {
    if (isOpen) {
      onSave(note.id, title, content);
      setIsOpen(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 1200);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <main className="editor">
      <button className="add-button" onClick={buttonHandler}>
        {isOpen ? "Save" : "Edit Note"}
      </button>

      {saved && <p className="saved-text">✔ Saved</p>}

      {!isOpen && (
        <>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </>
      )}

      {isOpen && (
        <div className="editing">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={6}
          />
        </div>
      )}
    </main>
  );
}

export default EditorContainer;
