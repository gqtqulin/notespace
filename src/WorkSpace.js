import {useState, useEffect} from 'react'
import Note from './Note'
import ControlPanel from './ControlPanel'

function WorkSpace({account, handleChangeModeButtonClick, setNotes, notes, isEditMode, setIsEditMode}) {
    const [currentId, setCurrentId] = useState();

    useEffect(() => {
        localStorage.setItem({account}, JSON.stringify(notes))
        console.log(`useEffect при изменениях в notes ${account}`)
    }, [notes, account])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(account))
        console.log(`localStorage data: ${data}, account:${account}`)
        if (data && Object.keys(data).length > 0) {
            setNotes(data)
        } else {
            setNotes({})
        }
    }, [])

    return (<div className="work-space-container">
        {isEditMode ? 
        <Note isEditMode={isEditMode} notes={notes} setNotes={setNotes} currentId={currentId} setIsEditMode={setIsEditMode} /> :
        <ControlPanel notes={notes} setIsEditMode={setIsEditMode} setCurrentId={setCurrentId}/> 
        }
    </div>)
}

export default WorkSpace