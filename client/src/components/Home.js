// // import { useEffect, useState } from "react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!username || !password) {
//       console.error("Username and password are required");
//       return;
//     }

//     // Show loading spinner or disable submit button here

//     fetch("http://127.0.0.1:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // Handle success, redirect, or update UI as needed
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle errors and provide user feedback
//       })
//       .finally(() => {
//         // Hide loading spinner or re-enable submit button here
//       });
//   }

//   return (
//     <div>
//       <h1>Welcome Home</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>Don't have an account?</p>
//       <Link to="/signup">Register</Link>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!username || !password) {
//       console.error("Username and password are required");
//       return;
//     }

//     setLoading(true);

//     fetch("http://127.0.0.1:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         // Redirect to the dashboard or another page
//         history.push("/about");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle errors and provide user feedback
//       })
//       .finally(() => {
//         setLoading(false);
//         setPassword("");
//       });
//   }

//   return (
//     <div>
//       <h1>Welcome Home</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Submit"}
//         </button>
//       </form>
//       <p>Don't have an account?</p>
//       <Link to="/signup">Register</Link>
//     </div>
//   );
// }

import React from 'react'
import { useState,useEffect } from 'react'

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

export default function Home() {
    function handleSubmit(e){
        e.preventDefault()
    }
  return (
    <div>
        <h1>Welcome home</h1>
        <form>
            <input>type='text' placeholder='Enter your username' value={username} </input>
            <input>type='text' placeholder='Enter your password' value={password} </input>
        </form>
    </div>
  )
}
