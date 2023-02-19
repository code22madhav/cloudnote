import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'

function Navbar() {
    const location=useLocation();      //it gives current loc of url. used to dark the navitem when clicked
    const navigate=useNavigate();
  return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">cloudNote</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'? "active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'? "active":""}`} to="/about">About</Link>
            </li>
            </ul>
            {!localStorage.getItem('token')?
            <><Link className="btn btn-primary d-flex mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary d-flex mx-1" to="/signup" role="button">Signup</Link> </>: <Link className="btn btn-primary d-flex mx-1" to="/login" role="button" onClick={()=>{localStorage.removeItem('token'); navigate('/login')}}>Logout</Link>}
        </div>
        </div>
    </nav>
  )
}

export default Navbar