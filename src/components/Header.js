import logoInverted from "../img/logo-inverted.png";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = ({
  isSpaceMode,
  id,
  setId,
  setIsSpaceMode,
  account,
  setAccount,
  notes,
  setNotes,
  isEditMode,
  handleChangeModeButtonClick,
}) => {
  const [addButtonLoader, setAddButtonLoader] = useState(false);

  const handleCreateNoteButtonClick = () => {
    setAddButtonLoader(true);
    setNotes((prev) => {
      const newNote = { title: "", note: "" };
      const newNotes = { ...prev };
      newNotes[id] = newNote;
      return newNotes;
    });

    setAddButtonLoader(false);
    setId((prev) => (prev = prev + 1));
  };

  const handleOutButtonClick = () => {
    setIsSpaceMode(!isSpaceMode);
  };

  const getShortAddress = (account) => {
    const shortAddress =
      account.slice(0, 5) +
      "..." +
      account.slice(account.length - 4, account.length);
    return shortAddress;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <p className={styles.logoText}>NoteSPACE</p>
        <img src={logoInverted} className={styles.logo} alt="logo" />
      </div>
      {isSpaceMode && (
        <div className={styles.controlButtonsContainer}>
          <div className={styles.addNoteButtonContainer}>
            <button
              disabled={isEditMode || addButtonLoader}
              className={styles.button}
              onClick={handleCreateNoteButtonClick}
            >
              Add &#128451;
            </button>
          </div>
          <div className={styles.shortAddressContainer}>
            <p>{getShortAddress(account)}</p>
          </div>
          <div className={styles.outButtonContainer}>
            <button
              className={styles.button}
              disabled={isEditMode}
              onClick={handleOutButtonClick}
            >
              Out &#128272;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
