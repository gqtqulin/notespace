import styles from './ContolPanel.module.css';
import { ethAccounts } from "../EthereumRequests";

const ControlPanel = ({
  notes,
  account,
  setId,
  setNotes,
  setCurrentId,
  setIsEditMode,
  setIsSpaceMode,
  setIsLogin
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
        <p className="color-white">Time to create!</p>
      )}
    </div>
  );
};

export default ControlPanel;
