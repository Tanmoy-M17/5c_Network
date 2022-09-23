import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFollowers } from '../Redux/action';

const User = () => {
    const dispatch=useDispatch()
    const Repos=useSelector((state)=>state.Repos);
    const Followers=(data)=>{
        dispatch(getFollowers(data))
    }
    if(Repos.length>0){
        return (
            <div>
                <img src={`${Repos[0].owner.avatar_url}`} alt="" />
                {Repos[0].owner.login}
                <button onClick={()=>{Followers(Repos[0].owner.login)}}>Followers</button>
            </div>
          )
    }
}

export default User