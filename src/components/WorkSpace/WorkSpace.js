import { useState, useEffect } from "react";
import Note from "../Note/Note";
import ControlPanel from "../ControlPanel/ControlPanel";
import styles from "./WorkSpace.module.css";

function WorkSpace({
  account,
  setAccount,
  id,
  setId,
  handleChangeModeButtonClick,
  setNotes,
  notes,
  isEditMode,
  setIsEditMode,
  setIsLogin,
  setIsSpaceMode,
}) {
  const [currentId, setCurrentId] = useState();
  const [storedNote, setStoredNote] = useState(() => {
    const data = JSON.parse(localStorage.getItem(account));
    if (data) {
      setNotes(data);
      setId(Object.keys(data).length);
    }
    return data;
  });

  useEffect(() => {
    localStorage.setItem(account, JSON.stringify(notes));
    //console.log(`${JSON.stringify(account)} and ${JSON.stringify(notes)}`)
  }, [notes]);

  return (
    <div className={styles.workSpaceContainer}>
      <ControlPanel
        notes={notes}
        setNotes={setNotes}
        account={account}
        setIsEditMode={setIsEditMode}
        setCurrentId={setCurrentId}
        setIsLogin={setIsLogin}
        setIsSpaceMode={setIsSpaceMode}
        isEditMode={isEditMode}
        currentId={currentId}
      />
    </div>
  );
}

export default WorkSpace;
