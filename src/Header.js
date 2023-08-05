import logoInverted from './img/logo-inverted.png'
import {useEffect, useState} from 'react'

const Header = ({isSpaceMode, id, setId, setIsSpaceMode, account, setAccount, notes, setNotes, isEditMode, handleChangeModeButtonClick}) => {
    const [addButtonLoader, setAddButtonLoader] = useState(false);
    
    const handleCreateNoteButtonClick = () => {
        setAddButtonLoader(true)
        setNotes((prev) => {
            const newNote = {title: '', note: ''}   
            const newNotes = {...prev}
            newNotes[id] = newNote
            return newNotes
        })

        setAddButtonLoader(false)
        setId(prev => prev = prev + 1)
    }

    const handleOutButtonClick = () => {
        setIsSpaceMode(!isSpaceMode)
    }

    const getShortAddress = (account) => {
        const shortAddress = account.slice(0, 5) + '...' + account.slice(account.length - 4, account.length)
        return shortAddress;
      }

    return (
        <header className="header">
            <div className="header-logo">
                <p className="logo-text">NoteSPACE</p>
                <img src={logoInverted} className="logo" alt='logo'/>
            </div>
            {isSpaceMode && <div className="control-buttons-container">
                <div className="add-note-button-container">
                    <button disabled={isEditMode || addButtonLoader} className="button add-note-button" onClick={handleCreateNoteButtonClick}>Add &#128451;</button>
                </div>
                <div className="short-address-container">
                    <p>{getShortAddress(account)}</p>
                </div>
                <div className="out-button-container">
                    <button className="button" disabled={isEditMode} onClick={handleOutButtonClick}>Out &#128272;</button>
                </div>
            </div>}
      </header>
    )
}

export default Header