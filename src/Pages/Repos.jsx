import React from 'react'
import { useSelector } from 'react-redux';
import User from './User';
const Repos = () => {
  const Repos=useSelector((state)=>state.Repos);
  console.log(Repos);
  return (
   <div>
    <User/>
    {Repos.length>0&&Repos.map((data,i)=>
   <div key={i}>
    <img src={`${data.owner.avatar_url}`} alt="" />
    {data.name}
    {data.description}
   </div>)}
   </div>
  )
}

export default Repos