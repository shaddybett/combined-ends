import React from "react";
import {Link} from "react-router-dom"

export default function Signup() {
  return (
    <div>
      <h1>This is signup hi there!</h1>
      <Link to="/" >Home</Link>
      <Link to="/about" >about</Link>
    </div>
  );
}
