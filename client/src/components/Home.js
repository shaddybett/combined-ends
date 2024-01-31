import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <p>Don't have an account?</p>
      <Link to="/signup">Register</Link>
    </div>
  );
}
