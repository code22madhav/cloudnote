import Notecontext from "./notecontext";
import { useState } from "react";

const NoteState=(props)=>{
    const data=[
        {
          "_id": "63ee76c513caced873xc481343a",
          "user": "63ea7db2675d028ec4ddca2e",
          "title": "user9",
          "description": "first note added99",
          "tag": "add note",
          "date": "2023-02-16T18:32:37.311Z",
          "__v": 0
        },
        {
            "_id": "63ee76c513cadcd873c4b81343b",
            "user": "63ea7db2675d028ec4ddca2e",
            "title": "user9",
            "description": "first note added99",
            "tag": "add note",
            "date": "2023-02-16T18:32:37.311Z",
            "__v": 0
          },
          {
            "_id": "63ee76c51s3cacd873c481343qc",
            "user": "63ea7db2675d028ec4ddca2e",
            "title": "user9",
            "description": "first note added99",
            "tag": "add note",
            "date": "2023-02-16T18:32:37.311Z",
            "__v": 0
          },
          {
            "_id": "63ee76c513cacdj873c481343wd",
            "user": "63ea7db2675d028ec4ddca2e",
            "title": "user9",
            "description": "first note added99",
            "tag": "add note",
            "date": "2023-02-16T18:32:37.311Z",
            "__v": 0
          },
          {
            "_id": "63ee76c513cacdr873c481343ee",
            "user": "63ea7db2675d028ec4ddca2e",
            "title": "user9",
            "description": "first note added99",
            "tag": "add note",
            "date": "2023-02-16T18:32:37.311Z",
            "__v": 0
          },{
            "_id": "63ee76c513caccd873c481343rf",
            "user": "63ea7db2675d028ec4ddca2e",
            "title": "user9",
            "description": "first note added99",
            "tag": "add note",
            "date": "2023-02-16T18:32:37.311Z",
            "__v": 0
          }        
      ]

      const [note, setnote] = useState(data)

      //Add a note
      const addnote=(title, description, tag)=>{
        const notes={
          "_id": "63ee76c513cacdj873c481343wd",
          "user": "63ea7db2675d028ec4ddca2e",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-02-16T18:32:37.311Z",
          "__v": 0
        }
        setnote(note.concat(notes));
      }
      
      //Delete Notes
      const deletenote=(id)=>{
          const newnote=note.filter((note)=>{return id!==note._id});
          setnote(newnote);
      }



    return(
        <Notecontext.Provider value={{note, addnote, deletenote}}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default NoteState;