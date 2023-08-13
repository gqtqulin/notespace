import styles from "./ContolPanel.module.css";
import { ethAccounts } from "../../EthereumRequests";
import Note from "../Note/Note";

const ControlPanel = ({
  notes,
  account,
  setId,
  setNotes,
  setCurrentId,
  setIsEditMode,
  setIsSpaceMode,
  setIsLogin,
  isEditMode,
  currentId
}) => {
  const handleStartEditMode = async (key) => {
    const accounts = await ethAccounts();
    if (accounts[0] === account) {
      setIsEditMode(true);
      setCurrentId(key);
      console.log(`start edit mode with id:${key}`);
    } else {
      alert("Re-connect account");
      setIsLogin(false);
      setIsSpaceMode(false);
    }
  };

  const createList = () => {
    if (Object.keys(notes).length === 0) {
      console.log("notes.length = 0");
      return;
    }

    return (
      <ul className={styles.notesList}>
        {Object.entries(notes).map(([id, note]) => {
          return (
            <li key={id} className={styles.listItem}>
              <Note
                id={id}
                note={note}
                isEditMode={isEditMode}
                notes={notes}
                setNotes={setNotes}
                currentId={currentId}
                setIsEditMode={setIsEditMode}
              />
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
