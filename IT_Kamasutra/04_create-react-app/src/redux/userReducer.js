import { userAPI } from './../api/api';


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
                users: state.users.map( elem => {
                    
                    if ( elem.id === action.id ){
                        
                        return {...elem, followed: true}
                    }
                    
                    return elem;
                })
            } 

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( elem => {
                    if ( elem.id === action.id ){
                        return { ...elem, followed: false }
                    }
                    return elem;
                })
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
    return (dispatch) => {

        dispatch( setIsFetching(true) );
        dispatch( setCurrentPage( choosedPage ) );

        userAPI.getUsers( choosedPage, pageSize )
        .then( response => {

            dispatch( setIsFetching( false ) );
            dispatch( setUsers( [...response.items] ) );
            dispatch( setUsersTotalCount( response.totalCount ) );
            
        });
    };
}

export const followThunkCreator = ( userid )=> {
    return (dispatch) => {
        dispatch( toggleIsFollowingProgress(true, userid) );
        userAPI.followUser(userid).then(response => {
            if( response.data.resultCode === 0) {
                dispatch( followSuccess ( userid ) );
            }
            dispatch( toggleIsFollowingProgress(false, userid) );
        });
    }
};
export const unfollowThunkCreator = (userid) => {
    return (dispatch) => {
        dispatch( toggleIsFollowingProgress(true, userid) );

        userAPI.unfollowUser(userid).then(response => {
            if( response.data.resultCode === 0 ) {
                dispatch( unfollowSuccess (userid) ) ;
            }

            dispatch( toggleIsFollowingProgress(false, userid) );

        });
    }
}

export default usersReducer;