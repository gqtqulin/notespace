import Note from './Note'
import {useState} from 'react'

const ControlPanel = ({notes, setCurrentId, setIsEditMode}) => {

    const handleStartEditMode = (key) => {
        setIsEditMode(true)
        setCurrentId(key)
        //console.log(key)
    }

    const createList = () => {
        if (Object.keys(notes).length === 0) {
            console.log("notes = 0");
            return;
        }

        return (<ul className="notes-list">
            {Object.keys(notes).map(key => {
                return <li onClick={() => handleStartEditMode(key)} className="list-item" key={key}>
                    <p>{key} &#128209;</p>
                </li>;
            })}
        </ul>);
    }

    return (<div className="control-panel-container">
        {Object.keys(notes).length > 0 ? createList() : <p className="">Time to create!</p>}
    </div>)
}

export default ControlPanel