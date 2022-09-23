import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import User from './User';
import "../Styles/Repos.css"
const Repos = () => {
  const Repos=useSelector((state)=>state.Repos);
  return (
   <div>
    <User/>
    <div id='container'>
    {Repos.length>0&&Repos.map((data,i)=>
    <Link  to={`/repo/${i}`} key={i}> 
    <div id='container2'>
      <div>
            <img id='ravatar' src={`${data.owner.avatar_url}`} alt="" />
      </div>
      <div>
        <h4>{data.name}</h4>
        <h6>{data.description}</h6>
      </div>
   </div>
   </Link>)}
   </div>
   </div>
  )
}

export default Repos