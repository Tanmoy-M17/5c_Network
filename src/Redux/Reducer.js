import { GET_FOLLOWER_FAILURE, GET_FOLLOWER_REPO_FAILURE, GET_FOLLOWER_REPO_REQUEST, 
        GET_FOLLOWER_REPO_SUCCESS, GET_FOLLOWER_REQUEST, GET_FOLLOWER_SUCCESS, 
        GET_REPO_FAILURE, GET_REPO_REQUEST, GET_REPO_SUCCESS } from "./actionType"

const initialState={
    Repos:[],
    Followers:[],
    FollowerRepo:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){

        case GET_REPO_REQUEST:
            return{...state,
                isLoading:true,
                sError:false
            }
        
        case GET_REPO_SUCCESS:
            return{
                ...state,
                Repos:payload,
                isLoading:false,
                isError:false
            }
        
        case GET_REPO_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }

            case GET_FOLLOWER_REQUEST:
                return{...state,
                    isLoading:true,
                    sError:false
                }
            
            case GET_FOLLOWER_SUCCESS:
                return{
                    ...state,
                    Followers:payload,
                    isLoading:false,
                    isError:false
                }
            
            case GET_FOLLOWER_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError:true
                }
           

                case GET_FOLLOWER_REPO_REQUEST:
            return{...state,
                isLoading:true,
                sError:false
            }
        
        case GET_FOLLOWER_REPO_SUCCESS:
            return{
                ...state,
                FollowerRepo:payload,
                isLoading:false,
                isError:false
            }
        
        case GET_FOLLOWER_REPO_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            } 
        
        default:
            return state
    }
}