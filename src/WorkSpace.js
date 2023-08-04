import {useState} from 'react'
import Note from './Note'
import ControlPanel from './ControlPanel'

function WorkSpace({account, handleChangeModeButtonClick, setNotes, notes, isEditMode, setIsEditMode}) {
    const currentAccount = account;
    const [currentId, setCurrentId] = useState();

    return (<div className="work-space-container">
        {isEditMode ? 
        <Note isEditMode={isEditMode} notes={notes} setNotes={setNotes} currentId={currentId} setIsEditMode={setIsEditMode} /> :
        <ControlPanel notes={notes} setIsEditMode={setIsEditMode} setCurrentId={setCurrentId}/> 
        }
    </div>)
}

export default WorkSpace