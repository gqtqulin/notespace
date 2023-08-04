import {useState, useEffect} from 'react'

const Note = ({setIsEditMode, notes, setNotes, currentId}) => {
    const [noteName, setNoteName] = useState('')
    const [noteText, setNote] = useState('')

    const handleGoBack = (e) => {
        e.preventDefault();
        setIsEditMode(false)
    }

    const handleChangeNote = (e) => {
        setNote(e.target.value)
        console.log('note-state is changed')
    }

    const onChangeNoteName = (e) => {
        setNoteName(e.target.value);
        console.log('name-state is changed')
    }

    useEffect(() => {
        const updatedNotes = [...notes];
        const selectedNote = updatedNotes.find(note => note.id === currentId)
        if (selectedNote) {
            selectedNote.title = noteName
            selectedNote.note = noteText
        }
        setNotes(updatedNotes)
    }, [noteName, noteText])

    return (<div className="note-container">
        <form className="note-form" onSubmit={handleGoBack}>
            <div className="rest-form">
                <input type="text" placeholder='change note name here' value={notes[currentId - 1].title} className="note-name-input" onChange={onChangeNoteName}></input>
                <p className="note-label">note</p>
                <input className="button" value="Back" type="submit" />
            </div>
            <div className="text-area-container">
                <textarea className="text-area" value={notes[currentId - 1].note} onChange={handleChangeNote} />
            </div>
        </form>
    </div>
    )
}

export default Note