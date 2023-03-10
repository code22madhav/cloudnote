import React from 'react'
import notecontext from '../context/notes/notecontext';
import { useContext } from 'react';

function Notesitem(props) {
    const {note, updateNote}=props;
    const context=useContext(notecontext);
    const {deletenote}=context;

  return (
    <div className="col-md-3 my-3">
    <div className="card">
    <div className="card-body">
      <div className="d-flex align-items-center">
     <h5 className="card-title">{note.title}</h5>
     <i className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}}></i>
     <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
        {/* <p className='card-text'>{note.tag}</p> */}
        <p className="card-text">{note.description}</p>
    </div>
    </div>
    </div>
  )
}

export default Notesitem