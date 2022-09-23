import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFollowersRepo } from '../Redux/action';
import "../Styles/Followers.css"
const Followers = () => {
  const dispatch=useDispatch();
    const Followers=useSelector((state)=>state.Followers);
    const Follwerdetails=(data)=>{
      dispatch(getFollowersRepo(data))
    }
  return (
    <div>
      <h1>Followers:--</h1>
        {Followers.length>0&&Followers.map((e,i)=>
        <div  key={i} onClick={()=>{Follwerdetails(e.login)}}>
       <Link to={`/${e.id}/${e.login}`}>
        <div id='con'>
          <img src={`${e.avatar_url}`} alt="" />
         <h3>{e.login}</h3>
         </div>
        </Link>
        </div>)}
    </div>
  )
}

export default Followers