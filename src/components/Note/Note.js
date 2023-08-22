import { useState, useEffect, useRef } from "react";
import styles from "./Note.module.css";
import { Rnd } from "react-rnd";

const Note = ({ setIsEditMode, notes, setNotes, currentId, note, id }) => {
  const [noteName, setNoteName] = useState(note.title);
  const [noteText, setNote] = useState(note.note);

  useEffect(() => {
    const newNotes = { ...notes };
    console.log(newNotes);
    const updatedNote = { title: noteName, note: noteText };
    newNotes[id] = updatedNote;
    setNotes(newNotes);
  }, [noteName, noteText]);

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 200,
      }}
      minWidth={30}
      enableResizing={{
        bottom: false,
        left: false,
        right: false,
        top: false,
        bottomLeft: true,
        bottomRight: true,
      }}
      scale={1}
    >
      <form className={styles.noteForm}>
        <input
          type="text"
          value={noteName}
          placeholder="note name 31337"
          className={styles.noteNameInput}
          onChange={(e) => setNoteName(e.target.value)}
        ></input>
        <textarea
          className={styles.textArea}
          value={noteText}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
    </Rnd>
  );
};

export default Note;
