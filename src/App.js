import './App.css';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import NoteState from './context/notes/NoteState';
import Login from './components/Login'
import Signup from './components/Signup'
import Alerts from './components/Alert'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import React from 'react';

function App() {
  const [alert, setalert] = useState(null);
  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
}
  return (
    <NoteState>
      <Router>
        <Navbar/>
        <Alerts alert={alert}/>
        <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </Router>
    </NoteState>
  );
}

export default App;
