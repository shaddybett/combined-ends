import React from 'react'
import { useState,useEffect } from 'react'


function Login() {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')

    useEffect(()=>{
        fetch('http://localhost:5000/login',
        methods = 'GET',
        headers = Application/json)
    },[])
    function handleSubmit(e){
        e = e.preventDefault(e)
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your username' value={user} onChange={setUser} />
        <input type='password' placeholder='Enter your password' value={password} onChange={setPassword} />
        <button onClick={handleSubmit} >Submit</button>
        </form>
    </div>
  )
}

export default Login