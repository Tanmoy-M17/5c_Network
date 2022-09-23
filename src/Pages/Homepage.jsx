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
      };
  return (
    <div>
        <input type="text" 
        onKeyUp={(e)=>{if (e.key === "Enter") {
            handlesearch()
          }}} onChange={(e)=>{handelchange(e)}} />
        <button id='btn' onClick={()=>{handlesearch()}}>Serch</button>
          <Repos/>
    </div>
  )
}

export default Hompage