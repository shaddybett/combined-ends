import React,{useState} from 'react'


export default function Signup() {
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const handleSignup = ()=> {

    }
    useEffect(()=>{
        fetch('http://localhost:5000/signup')
        .then ((response)=>{
            if(!response.ok) {
                throw new Error ('Signup unsuccesfull'),400
            }
            else {
                return jsonify({'message':'successfully signed in'}),200
            }
           
        })
        .then ((data)=>setData(data)) 
        .catch((error)=>console.error('Error signing in:',error)),404
    },[])
  return (
    <div>
        <input type='text' placeholder='Enter your Username' value={user} ></input>
        <input type='email' placeholder='Enter your email' value={email} ></input>
        <input type='password' placeholder='Enter your password' value={pass} ></input>
    </div>
  )
}








import React, { useState } from 'react';

export default function Signup() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSignup = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                email: email,
                password: pass,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Signup unsuccessful');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Handle successful signup response
        })
        .catch(error => {
            console.error('Error signing up:', error);
        });
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Enter your Username'
                value={user}
                onChange={e => setUser(e.target.value)}
            />
            <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Enter your password'
                value={pass}
                onChange={e => setPass(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}
