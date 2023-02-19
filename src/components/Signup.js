import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credential, setcredential] = useState({"name":"", "email": "", "password": "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API calls
        const response = await fetch('http://localhost:8900/api/auth/createuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:credential.name, email: credential.email, password: credential.password })
        });
        const json = await response.json();
        if (json.success) {
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
    return ( 
        <div className='col-md-10 col-12 mx-auto my-5'>  
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={onchange} min={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onchange} min={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} min={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup