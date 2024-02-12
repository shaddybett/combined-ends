import React,{useState,useEffect} from 'react'


export default function Signup() {
    const[user,setUser] = useState('')

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
        .then ((user)=>setUser(user)) 
        .catch((error)=>console.error('Error signing in')),404
    },[])
  return (
    <div>
        <input type='text'></input>
        <input></input>
    </div>
  )
}
