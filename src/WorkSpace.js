import {useState, useEffect} from 'react'
import Note from './components/Note'
import ControlPanel from './components/ControlPanel'

function WorkSpace({account, id, setId, handleChangeModeButtonClick, setNotes, notes, isEditMode, setIsEditMode}) {
    const [currentId, setCurrentId] = useState();
    const [storedNote, setStoredNote] = useState(() => {
        const data = JSON.parse(localStorage.getItem(account))
        if (data) {
            setNotes(data)
        }
        return data
    })

    // Обновление данных в localStorage при изменении состояния заметок
    useEffect(() => {
        localStorage.setItem(account, JSON.stringify(notes));
        //console.log(`${JSON.stringify(account)} and ${JSON.stringify(notes)}`)
    }, [notes]);

    return (<div className="work-space-container">
        {isEditMode ? 
        <Note isEditMode={isEditMode} notes={notes} setNotes={setNotes} currentId={currentId} setIsEditMode={setIsEditMode} /> :
        <ControlPanel notes={notes} setIsEditMode={setIsEditMode} setCurrentId={setCurrentId}/> 
        }
    </div>)
}

export default WorkSpace