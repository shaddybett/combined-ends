// import React,{useState,useEffect} from 'react'

// export default function Home() {
//     const [data,setData] = useState([])

//     useEffect(()=>{
//         fetch('http://localhost:5000/home')
//         .then((response)=> {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             else {
//                 return response.json();
//             }
//         })
//         .then((data)=>setData(data.members))
//         .catch((error)=>{console.error('Error fetching data:', error)});
    
        
//     },[])
//   return (
//     <div>
//         {data ? (
//             <ul>
//                 {data.map((member,index)=> (
//                     <li key={index}>{member}</li>
//                 ))}
//             </ul>
//         ):(<p>Loading...</p>)}
//     </div>
//   )
// }
