import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Followersrepo from './Followersrepo';
import "../Styles/User.css"
const Followersdetails = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const Followers =useSelector((state)=>state.Followers);
  const [currentUser,setCurrentUser] = useState({}); 
   useEffect(() => { 
     if (id) { 
       const temp = Followers.find((followers) => followers.id === Number(id)); 
       temp && setCurrentUser(temp); 
     } 
   }, [Followers, id]);  
  return (
    <div>
      <img id='avtar'  src={`${currentUser.avatar_url}`} alt="" />
       <h1>{currentUser.login}</h1> 
      <Followersrepo/>
      <button onClick={()=>{navigate("/")}}>Back To Home</button>
    </div>
  )
}

export default Followersdetails