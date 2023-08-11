import { useState, useEffect, useRef } from "react";
import styles from './Note.module.css';

const Note = ({ setIsEditMode, notes, setNotes, currentId }) => {
  const [noteName, setNoteName] = useState(notes[currentId].title);
  const [noteText, setNote] = useState(notes[currentId].note);

  // попробовать сделать сохранение с помощью useEffect без нажатия по кнопке
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setNotes((prev) => {
      const newNotes = { ...prev };
      const updatedNote = { title: noteName, note: noteText };
      newNotes[currentId] = updatedNote;

      setIsEditMode(false);
      return newNotes;
    });
  };

  const handleGoBack = () => {
    setIsEditMode(false);
  };

  return (
    <div className={styles.noteContainer}>
      <form className={styles.noteForm} onSubmit={handleSubmitForm}>
        <div className={styles.restForm}>
          <input
            type="text"
            value={noteName}
            placeholder="change note name here"
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
