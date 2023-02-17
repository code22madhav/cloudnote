import notecontext from '../context/notes/notecontext';
import { useContext } from 'react';
import Notesitem from './Notesitem';
import Addnote from './Addnote';

const Notes = () => {
    const context=useContext(notecontext);
    const {note}=context;
    return (
        <>
        <Addnote/>
        <div className="row my-3">
            <h2>Your Notes</h2>
        {note.map((note) => {
            return <Notesitem key={note._id} note={note}/>
        })}
        </div>
        </>
    )
}

export default Notes

