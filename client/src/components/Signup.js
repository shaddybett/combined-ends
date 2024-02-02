import React from "react";
import {Link} from "react-router-dom"

export default function Signup() {
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://127.0.0.1:5000/register")
    }

  return (
    <div>
      <h1>This is signup hi there!</h1>
      <Link to="/" >Home</Link>
      <Link to="/about" >about</Link>
    </div>
  );
}
