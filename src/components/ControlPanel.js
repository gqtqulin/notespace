import Note from "./Note";
import { useState, useEffect } from "react";
import styles from './ContolPanel.module.css';

const ControlPanel = ({
  notes,
  account,
  setId,
  setNotes,
  setCurrentId,
  setIsEditMode,
}) => {
  const handleStartEditMode = (key) => {
    setIsEditMode(true);
    setCurrentId(key);
    console.log(`start edit mode with id:${key}`);
  };

  const createList = () => {
    if (Object.keys(notes).length === 0) {
      console.log("notes = 0");
      return;
    }

    return (
      <ul className={styles.notesList}>
        {Object.keys(notes).map((key) => {
          return (
            <li
              onClick={() => handleStartEditMode(key)}
              className={styles.listItem}
              key={key}
            >
              <p>{key} &#128209;</p>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.controlPanelContainer}>
      {Object.keys(notes).length > 0 ? (
        createList()
      ) : (
        <p className="">Time to create!</p>
      )}
    </div>
  );
};

export default ControlPanel;
