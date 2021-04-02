import { userAPI } from './../api/api';
import {updateObjectInArray } from './../utils/objectHelper'



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'


const initialState = {
    users: [],
    pageSize: 10,
    portionSize: 10,
    usersTotalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []    
};

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FOLLOW:
            
            return {
                ...state,
                users: updateObjectInArray( state.users, action.id, 'id', {followed: true} )
                // state.users.map( elem => {
                    
                //     if ( elem.id === action.id ){
                        
                //         return {...elem, followed: true}
                //     }
                    
                //     return elem;
                // })
            } 

        case UNFOLLOW:
            return {
                ...state,
                users:  updateObjectInArray( state.users, action.id, 'id', {followed: false} )
                // state.users.map( elem => {
                //     if ( elem.id === action.id ){
                //         return { ...elem, followed: false }
                //     }
                //     return elem;
                // })
            }     

        case SET_USERS :
             
            return {
                ...state, 
                users: action.users
            }
        
        case SET_CURRENT_PAGE :
          
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_TOTAL_COUNT :
            
            return {
                ...state,
                usersTotalCount: action.count
            } 

        case TOOGLE_IS_FETCHING :
            
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOOGLE_IS_FOLLOWING_PROGRESS :
        
            let followingInProgress = action.isFetching ? 
                [...state.followingInProgress, action.userid] :
                state.followingInProgress.filter( (id) => { return id !== action.userid } )
            return {
                ...state,
                followingInProgress: followingInProgress 
            } 
        
        default: 
            return state;
    }
}


// START Action creators
export const followSuccess = (id) => { 
    return {
        type: FOLLOW,
        id
    };
}

export const unfollowSuccess = (id) => { 
    return {
        type: UNFOLLOW,
        id
    };
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
}

export const setUsersTotalCount = ( usersTotalCount ) => {
    
    return {
        type: SET_USERS_TOTAL_COUNT,
        count: usersTotalCount
    };
}

export const setIsFetching = ( isFetching ) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching
    };
}

export const toggleIsFollowingProgress = ( isFetching, userid ) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching: isFetching,
        userid: userid
    };
}
// END Action creators

// thunk
export const getUsersThunkCreator = ( choosedPage, pageSize ) => {
    return async (dispatch) => {

        dispatch( setIsFetching(true) );
        dispatch( setCurrentPage( choosedPage ) );
        
        let response = await userAPI.getUsers( choosedPage, pageSize );
        
        dispatch( setIsFetching( false ) );
        dispatch( setUsers( [...response.items] ) );
        dispatch( setUsersTotalCount( response.totalCount ) );
    };
}

const followUnfollow =  async (dispatch, userid, apiMethod, success) => {

    dispatch( toggleIsFollowingProgress(true, userid) );
    let response = await apiMethod(userid)
    if ( response.data.resultCode === 0 ) {
        dispatch( success(userid) ) ;
    }
    dispatch( toggleIsFollowingProgress(false, userid) );
}

export const followThunkCreator = ( userid )=> {
    return async (dispatch) => {

        let apiMethod = userAPI.followUser.bind(userAPI);
        followUnfollow(dispatch, userid, apiMethod, followSuccess);
    }
};

export const unfollowThunkCreator = (userid) => {
    return async (dispatch) => {

        let apiMethod = userAPI.unfollowUser.bind(userAPI);
        followUnfollow(dispatch, userid, apiMethod, unfollowSuccess);
    }
}

export default usersReducer;