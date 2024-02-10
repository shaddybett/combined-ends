import React,{useState,useEffect} from 'react'

export default function Home() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/members')
    },[])
  return (
    <div>Home</div>
  )
}
