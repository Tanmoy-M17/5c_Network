import React, { useEffect, useState } from 'react' 
import { useSelector } from 'react-redux'; 
import {  useNavigate, useParams } from 'react-router-dom'; 
import "../Styles/Singelrepo.css"
const SingelRepo = () => { 
  const navigate=useNavigate()
    const { id } = useParams();
    const Repos =useSelector((state)=>state.Repos);
    const [currentRepo,setCurrentRepo] = useState({}); 
   useEffect(() => { 
     if (id) { 
       const temp = Repos.find((Repos) => Repos.id === Number(id));  
       temp && setCurrentRepo(temp); 
     } 
   }, [Repos,id]); 
      return (
        <div>
          <div id='detailcontainer'>
          <div  id='left'>
          <img id='Repoavatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGff7tNB1-NWA65vu4wxM_vj00bLtFgB29CA&usqp=CAU" alt="" />
          <div id='vc'>
          <img id='vertified' src="https://thumbs.dreamstime.com/b/approved-icon-profile-verification-accept-badge-quality-check-mark-sticker-tick-vector-illustration-136617543.jpg" alt="" />
          <h5 id='vertifiedt'>Verified By Github</h5>
          </div>
          <h5>Github confirms That this repo meets the <span>requirement for verification</span></h5>
          
          <h5>Createted At:-{currentRepo.created_at}</h5>
          <h5>Language:-{currentRepo.language}</h5> 
          </div>
    
          <div id='right'>
          <p>Application</p> 
          <h1>{currentRepo.name}</h1>
          <h5>{currentRepo.description}</h5>
          </div>
          </div>
          <button id='btnh' onClick={()=>{
              navigate("/")
          }}> &laquo; Back To Home</button>
        </div>
          )
    }
      
export default SingelRepo



