import React,{useState,useEffect} from 'react'


export default function Signup() {
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const[data,setData] = useState('')

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
