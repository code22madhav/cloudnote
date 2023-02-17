import notecontext from '../context/notes/notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';

const Notes = () => {
    const context=useContext(notecontext);
    const {note , setnote}=context;
    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
        {note.map((note) => {
            return <Notesitem key={note._id} note={note}/>
        })}
        </div>
    )
}

export default Notes

