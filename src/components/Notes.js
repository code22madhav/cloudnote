import React, { useContext, useEffect, useRef, useState} from 'react'
import notecontext from '../context/notes/notecontext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate=useNavigate();
    const context = useContext(notecontext);
    const { note, getNote, editNote} = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNote();
        }else{
            navigate("/login");
        }
        // eslint-disable-next-lineee
    }, [])

    const [notee, setnotee] = useState({"id":"", "title":"", "description":"", "tag":"default"})
    const onchange=(e)=>{
        setnotee({...notee, [e.target.name]:e.target.value})      //square bracket is used as a dynamic key to 
    }                                                        //set the value of a property in the note object

    const refClose = useRef(null);
    const handleclick=(e)=>{
        refClose.current.click(); 
        editNote(notee._id, notee.title, notee.description, notee.tag);
    }

    const ref = useRef(null);
    const updateNote=(currentNote)=>{
      ref.current.click();
      setnotee(currentNote);
    }

    return (
        <>
            <Addnote />
            
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={notee.title} aria-describedby="emailHelp" onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={notee.description} onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={notee.tag} onChange={onchange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={notee.title.length<3 || notee.description.length<5} onClick={handleclick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>






            <div className="row my-3">
                <h2>Your Notes</h2>
                {note.map((note) => {
                    return <Notesitem key={note._id} note={note} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}

export default Notes

