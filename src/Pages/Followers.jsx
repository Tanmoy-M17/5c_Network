import React from 'react'
import { useSelector } from 'react-redux';

const Followers = () => {
    const Followers=useSelector((state)=>state.Followers);
  return (
    <div>
        {Followers.length>0&&Followers.map((e,i)=>
        <div  key={i}>
       
        <div>{e.login}</div>

        </div>)}
    </div>
  )
}

export default Followers