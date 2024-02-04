import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import About from "./About";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      console.error("Username and password required");
      return;
    }
    setLoading(true);
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.error("Error:", data.error);
          alert("An error occurred: " + data.error);
        } else {
          navigate("/about");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred.Please try again later");
      })
      .finally(() => {
        setLoading(false);
        setUsername("");
        setPassword("");
      });
  }

  return (
    <div>
      <h1>Welcome home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      <p>
        Don't have an account?<Link to={"/signup"}>Register</Link>
      </p>
    </div>
  );
}
