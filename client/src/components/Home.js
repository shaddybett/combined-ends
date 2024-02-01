// import { useEffect, useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault()
    



  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter your username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup">Register</Link>
    </div>
  );
}
