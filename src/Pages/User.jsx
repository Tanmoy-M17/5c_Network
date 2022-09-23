import React from 'react'
import { useSelector } from 'react-redux';

const User = () => {
    const Repos=useSelector((state)=>state.Repos);
    if(Repos.length>0){
        const User=Repos[0].owner;
        console.log(User);
    } 
  return (
    <div>{User}</div>
  )
}

export default User