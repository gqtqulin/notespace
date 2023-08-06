import {useState, useEffect, useRef} from 'react'

const Note = ({setIsEditMode, notes, setNotes, currentId}) => {
    const [noteName, setNoteName] = useState(notes[currentId].title)
    const [noteText, setNote] = useState(notes[currentId].note)

    // попробовать сделать сохранение с помощью useEffect без нажатия по кнопке
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setNotes((prev) => {
            const newNotes = {...prev};
            const updatedNote = {title: noteName, note: noteText}
            newNotes[currentId] = updatedNote

            setIsEditMode(false)
            return newNotes
        })
    }

    const handleGoBack = () => {
        setIsEditMode(false)
    }

    return (<div className="note-container">
        <form className="note-form" onSubmit={handleSubmitForm}>
            <div className="rest-form">
                <input type="text" value={noteName} placeholder='change note name here' className="note-name-input" onChange={(e) => setNoteName(e.target.value)}></input>
                <input className="button" value="Save" type="submit" />
            </div>
            <div className="text-area-container">
                <textarea className="text-area" value={noteText} onChange={(e) => setNote(e.target.value)} />
            </div>
        </form>
    </div>
    )
}

export default Note