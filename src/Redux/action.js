import {GET_FOLLOWER_FAILURE, GET_FOLLOWER_REPO_FAILURE, GET_FOLLOWER_REPO_REQUEST,
   GET_FOLLOWER_REPO_SUCCESS, GET_FOLLOWER_REQUEST, GET_FOLLOWER_SUCCESS, 
   GET_REPO_FAILURE, GET_REPO_REQUEST, GET_REPO_SUCCESS } from "./actionType";
import axios from "axios"

export const getRepo=(params)=>(dispatch)=>{
    dispatch({type:GET_REPO_REQUEST});
    axios.get(`https://api.github.com/users/${params}/repos`)
    .then((r)=>dispatch({type:GET_REPO_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_REPO_FAILURE}))
}

export const getFollowers=(params)=>(dispatch)=>{
  dispatch({type:GET_FOLLOWER_REQUEST});
  axios.get(`https://api.github.com/users/${params}/followers`)
  .then((r)=>dispatch({type:GET_FOLLOWER_SUCCESS,payload:r.data}))
  .catch((err)=>dispatch({type:GET_FOLLOWER_FAILURE}))
}

export const getFollowersRepo=(params)=>(dispatch)=>{
  dispatch({type:GET_FOLLOWER_REPO_REQUEST});
  axios.get(`https://api.github.com/users/${params}/repos`)
  .then((r)=>dispatch({type:GET_FOLLOWER_REPO_SUCCESS,payload:r.data}))
  .catch((err)=>dispatch({type:GET_FOLLOWER_REPO_FAILURE}))
}