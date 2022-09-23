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
    <Link  to={`/repo/${data.id}`} key={i}> 
    <div id='container2'>
      <div>
            <img id='ravatar' src={`${data.owner.avatar_url}`} alt="" />
      </div>
      <div>
        <div id='rname'>
        <h4>{data.name}</h4>
        <img id='vertified' src="https://thumbs.dreamstime.com/b/approved-icon-profile-verification-accept-badge-quality-check-mark-sticker-tick-vector-illustration-136617543.jpg" alt="" />
        </div>
        <h6>{data.description}</h6>
      </div>
   </div>
   </Link>)}
   </div>
   </div>
  )
}

export default Repos