import { useState, useEffect, useRef } from "react";
import styles from "./Note.module.css";
import { Rnd } from "react-rnd";

const Note = ({ setIsEditMode, notes, setNotes, currentId, note, id}) => {
  const [noteName, setNoteName] = useState(note.title);
  const [noteText, setNote] = useState(note.note);

  // попробовать сделать сохранение с помощью useEffect без нажатия по кнопке
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newNotes = { ...notes };
    console.log(newNotes);
    const updatedNote = { title: noteName, note: noteText };
    newNotes[id] = updatedNote;
    setNotes(newNotes);
  };

  return (
    <div className={styles.noteContainer}>
      <form className={styles.noteForm} onSubmit={handleSubmitForm}>
        <div className={styles.restForm}>
          <input
            type="text"
            value={noteName}
            placeholder="note name 31337"
            className={styles.noteNameInput}
            onChange={(e) => setNoteName(e.target.value)}
          ></input>
          <input className={styles.button} value="Save" type="submit" />
        </div>
        <div className={styles.textAreaContainer}>
          <textarea
            className={styles.textArea}
            value={noteText}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Note;
