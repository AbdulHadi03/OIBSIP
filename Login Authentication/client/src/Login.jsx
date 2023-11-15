import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
  
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result) 
            if(result.data==='Success'){nav('/landing')}
          
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="container">
      <div className="row">
        <form className="main" onSubmit={handleSubmit}>
          <div className="cred email">
            Email
            <input type="email" name="Email" id="email" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="cred password">
            Password
            <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="cred btn-register">
            <button type="submit" id="submt">Login!</button>
          </div>
          <p>New user? <Link to='/register' id="login">Register!</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
