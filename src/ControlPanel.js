import Note from './Note'
import {useState} from 'react'

const ControlPanel = ({notes, setCurrentId, setIsEditMode}) => {

    const handleStartEditMode = (note) => {
        setIsEditMode(true)
        setCurrentId(note.id)
        console.log(note.id)
    }

    const createList = () => {
        if (notes.length === 0) {
            console.log("notes = 0");
            return;
        }

        return (<ul className="notes-list">
            {notes.map(note => {
                return <li onClick={() => handleStartEditMode(note)} className="list-item" key={note.id}>
                    <p id={note.id}>{note.id} &#128209;</p>
                </li>;
            })}
        </ul>);
    }

    return (<div className="control-panel-container">
        {notes.length > 0 ? createList() : <p className="">Time to create!</p>}
    </div>)
}

export default ControlPanel