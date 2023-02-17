import React from 'react'

function Notesitem(props) {
    const {note}=props;
  return (
    <div className="col-md-3 my-3">
    <div className="card">
    <div className="card-body">
      <div className="d-flex align-items-center">
     <h5 className="card-title">{note.title}</h5>
     <i class="fa-solid fa-trash mx-2"></i>
     <i class="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo nostrum iste nobis placeat deleniti voluptatum ratione reprehenderit inventore suscipit velit sequi voluptate, culpa impedit vitae possimus ducimus beatae quod porro eligendi modi in!</p>
    </div>
    </div>
    </div>
  )
}

export default Notesitem