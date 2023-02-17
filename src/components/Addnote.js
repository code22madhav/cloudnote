import React, { useContext , useState} from 'react'
import notecontext from '../context/notes/notecontext';

const Addnote = () => {
    const context=useContext(notecontext);
    const {addnote}=context;
    const [note, setnote] = useState({"title":"", "description":"", "tag":"default"})//todo:check aftr erasing everything & use ""
    const onchange=(e)=>{
        setnote({...note, [e.target.name]:e.target.value})         //square bracket is used as a dynamic key to 
    }                                                              //set the value of a property in the note object.
    const handleclick=(e)=>{
        e.preventDefault();                       //if we remove preventdefault page will  reload  and data will be erased 
        addnote(note.title, note.description, note.tag);
    }
    return (
        <div className="container my-3">
            <h2>Add A Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onchange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
            </form>
        </div>
    )
}

export default Addnote