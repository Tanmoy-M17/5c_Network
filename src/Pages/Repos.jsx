import React from 'react'
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import RepoCard from './RepoCard';

const Repos = () => {
  const Repos=useSelector((state)=>state.Repos);
  console.log(Repos);
  return (
   <div>{Repos.length>0&&Repos.map((data)=>
   <div>
    {data.name}
    {data.description}
   </div>)}
   </div>
  )
}

export default Repos