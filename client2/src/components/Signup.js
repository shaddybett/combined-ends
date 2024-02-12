import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = () => {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        Content_Type: "application/json",
      },
      body: JSON.stringify({
        username: user,
        email: email,
        password: pass,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Signup Unsuccessful");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSignup}>Submit</button>
    </div>
  );
}
