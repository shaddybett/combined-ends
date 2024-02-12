import React,{useState,useEffect} from 'react'

function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/home')
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            else {
                return response.json();
            }
        })
        .then ((data)=> setData(data.members))
        .catch ((error)=> {console.error('error fetching data:', error)})
    },[])
  return (
    <div>
        {data ? (
            <ul>
                {data.map((member,index)=>(
                    <li key={index}>{member}</li>
                ))}
            </ul>
        ): (<p>Loading ...</p>)}
    </div>
  )
                }
export default Home
