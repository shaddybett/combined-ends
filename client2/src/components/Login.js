import React from 'react'
import { useState,useEffect } from 'react'


function Login() {
    const [data,setData] = useState('')

    useEffect(()=>{
        fetch('http://localhost:5000/login',
        methods = 'GET',
        headers = Application/json)
    },[])

  return (
    <div>
        <h1>Login</h1>
        <input />
    </div>
  )
}

export default Login