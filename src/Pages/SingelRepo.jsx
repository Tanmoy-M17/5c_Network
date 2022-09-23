import React, { useEffect, useState } from 'react' 
import { useSelector } from 'react-redux'; 
import {  useNavigate, useParams } from 'react-router-dom'; 
const SingelRepo = () => { 
  const navigate=useNavigate()
    const { id } = useParams();
    console.log(id)
    const Repos =useSelector((state)=>state.Repos);
    const [currentRepo, setCurrentRepo] = useState({}); 
   useEffect(() => { 
     if (id) { 
       const temp = Repos[id]; 
       temp && setCurrentRepo(temp); 
     } 
   }, [Repos, id]); 
    console.log("c",currentRepo); 
      return (
    <div>
      <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/07/Untitled-design-22-1.jpg" alt="" />
      <h1>{currentRepo.full_name}</h1>
      <h5>Createted At:{currentRepo.created_at}</h5>
      <h5>Language:{currentRepo.language}</h5> 
      <button colorScheme='blue' onClick={()=>{
          navigate("/")
      }}>Back To Home</button>
    </div>
      )
}

export default SingelRepo



