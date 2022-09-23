import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepo } from '../Redux/action';
import Followers from './Followers';
import Repos from './Repos';
import User from './User';

const Input = () => {
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
        <button onClick={()=>{handlesearch()}}>Serch</button>
        <Repos/>
        <User/>
        <Followers/>
    </div>
  )
}

export default Input