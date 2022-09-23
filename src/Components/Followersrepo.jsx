import React from 'react'
import { useSelector } from 'react-redux';
import "../Styles/Repos.css"
const Followersrepo = () => {
    const Followersrepo =useSelector((state)=>state.FollowerRepo);
  return (
    <div id='container'>{Followersrepo.length>0&&Followersrepo.map((e)=>
    <div id='container2' key={e.id}>
      <div>
            <img id='ravatar' src={`${e.owner.avatar_url}`} alt="" />
      </div>
      <div id='content'>
        <h4>{e.name}</h4>
        <h6>{e.description}</h6>
      </div>
    </div>)}
    </div>
  )
}

export default Followersrepo


