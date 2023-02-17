import React from 'react'
import { useContext } from 'react';
import notecontext from '../context/notes/notecontext';

function About() {
  const a=useContext(notecontext);
  return (
    <div>About {a.name}</div>
  )
}

export default About