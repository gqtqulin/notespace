import logoInverted from './img/logo-inverted.png'
import {useEffect, useState} from 'react'

const Header = ({isSpaceMode, account, notes, setNotes, isEditMode, handleChangeModeButtonClick}) => {
    const [addButtonLoader, setAddButtonLoader] = useState(false);
    const [id, setId] = useState(1);

    const handleCreateNoteButtonClick = () => {
        setAddButtonLoader(true)
        setTimeout(() => {
            setNotes((prev) => {
                return [...prev, {
                    id: id,
                    title: '',
                    note: ''
                }];
            })
        }, 10)
        setAddButtonLoader(false)
        setId(prev => prev = prev + 1)
        console.log(...notes)
    }

    useEffect(() => {
        console.log('массив notes изменен')
    }, [notes])

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
                    <button className="button" disabled={isEditMode} onClick={handleChangeModeButtonClick}>Out &#128272;</button>
                </div>
            </div>}
      </header>
    )
}

export default Header