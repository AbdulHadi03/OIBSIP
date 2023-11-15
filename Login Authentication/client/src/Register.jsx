import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Register() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
 const [password,setPassword]=useState()
  const nav=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
  if(password.length>7)  axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result) 
      nav('/login')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container">
      <div className="row">
        <form className="main" onSubmit={handleSubmit}>
          <div className="cred name">
            Name
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="cred email">
            Email
            <input type="email" name="Email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="cred password">
            Password(min 8 characters)
            <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="cred btn-register">
            <button type="submit" id="submt">Register!</button>
          </div>
          <p>Already registered? <Link to='/login' id="login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
