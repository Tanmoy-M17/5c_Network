import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFollowers } from '../Redux/action';
import "../Styles/User.css"
const User = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const Repos=useSelector((state)=>state.Repos);
    const Followers=(data)=>{
        dispatch(getFollowers(data))
        navigate("/followers")
    }
    if(Repos.length>0){
        return (
            <div>
                <img id='avtar' src={`${Repos[0].owner.avatar_url}`} alt="" />
                 <h1>{Repos[0].owner.login}</h1> 
                <button id='followers' onClick={()=>{Followers(Repos[0].owner.login)}}>Followers</button>
            </div>
          )
    }
}

export default User