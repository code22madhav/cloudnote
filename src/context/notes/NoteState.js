import Notecontext from "./notecontext";
import { useState} from "react";

const NoteState = (props) => {
  const host = "http://localhost:8900"
  const data = []

  const [note, setnote] = useState(data)

  //Get All Note
  const getNote = async () => {
    //API calls 
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMWMxYjI0NjBiNzkxZDY3MTM1ZWNmIn0sImlhdCI6MTY3Njc4ODE0Nn0.9iT9iqu7x9j0jpv49LMjlaGexL9q_SX90NtJ3bSUdh4"
      }
    });
    const json = await response.json();
    //front-end pe show karne ke liye setnote kiyaaaa
    setnote(json);
  }

  //Add a note
  const addnote = async (title, description, tag) => {
    //API call for adding note
    // eslint-disable-next-line 
    const response= await fetch(`${host}/api/notes/addnotes`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMWMxYjI0NjBiNzkxZDY3MTM1ZWNmIn0sImlhdCI6MTY3Njc4ODE0Nn0.9iT9iqu7x9j0jpv49LMjlaGexL9q_SX90NtJ3bSUdh4"
      },
      body: JSON.stringify({title, description, tag})
    });

    //front end logic
    const notes=await response.json();
    setnote(note.concat(notes));
  }

  //Delete Notes
  const deletenote = async(id) => {
    //API call for delete
    // eslint-disable-next-line 
    const response= await fetch(`${host}/api/notes/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMWMxYjI0NjBiNzkxZDY3MTM1ZWNmIn0sImlhdCI6MTY3Njc4ODE0Nn0.9iT9iqu7x9j0jpv49LMjlaGexL9q_SX90NtJ3bSUdh4"
      },
    });

    const newnote = note.filter((note) => { return id !== note._id });
    setnote(newnote);
  }

  
  //edit Note
  const editNote= async(id,title,description,tag)=>{
    //API call
    const response=await fetch(`${host}/api/notes/update/${id}`,{
      method: 'PUT',
      headers:{
        "Content-Type": "application/json",
        "jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMWMxYjI0NjBiNzkxZDY3MTM1ZWNmIn0sImlhdCI6MTY3Njc4ODE0Nn0.9iT9iqu7x9j0jpv49LMjlaGexL9q_SX90NtJ3bSUdh4"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json=response.json();

    //Front-End Logic
    let newNote=JSON.parse(JSON.stringify(note));       //to make a deep copy of this state
    for(let i=0;i<newNote.length;i++){
      const element=newNote[i];
      if(element._id === id){
        newNote[i].title=title;
        newNote[i].description=description;
        newNote[i].tag=tag;
        break;
      }
    }
    setnote(newNote);
  }


  return (
    <Notecontext.Provider value={{ note, addnote, deletenote, getNote, editNote}}>
      {props.children}
    </Notecontext.Provider>
  )
}

export default NoteState;