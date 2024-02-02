import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = usestate("");

  useEffect(() => {
    if (error) {
      console.error("Error:", error);
    }
  }, [error]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Invalid credentials");
      return;
    }
    fetch("http://127.0.0.5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        history.push("/about");
      }
    })
    .catch((error)=> {
      setError("Error during registration");

    })
  }
}

return (
  <div>
    <h1>This is signup hi there!</h1>
    <Link to="/">Home</Link>
    {/* <Link to="/about">about</Link> */}
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your username "
        value={username}
        onChange={(e)=>setUsername (e.target.value) }
      />
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);
