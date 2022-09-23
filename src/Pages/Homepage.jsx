import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepo } from '../Redux/action';
import Repos from './Repos';
import "../Styles/Hompage.css"
const Hompage = () => {
    const dispatch=useDispatch();
    const [username, setUsername] = useState("");
    const handelchange=(e)=>{
        setUsername(e.target.value) 
    }
    const handlesearch = (e) => {
        dispatch(getRepo(username))
        setUsername("")
      };
  return (
    <div>
        <input type="text" value={username}
        onKeyUp={(e)=>{if (e.key === "Enter") {
            handlesearch()
          }}} onChange={(e)=>{handelchange(e)}} placeholder="Enter Github User Id" />
        <button id='btn' onClick={()=>{handlesearch()}}>Serch</button>
          <Repos/>
    </div>
  )
}

export default Hompage