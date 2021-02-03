const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';


const initialState = {
    users: [],
    pageSize: 5,
    usersTotalCount: 0,
    currentPage: 1
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

        default: 
            return state;
    }
}

export const followAC = (id) => { 
    return {
        type: FOLLOW,
        id
    };
}

export const unfollowAC = (id) => { 
    return {
        type: UNFOLLOW,
        id
    };
}

export const serUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    };
}

export const serCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
}

export const setUsersTotalCountAC = ( usersTotalCount ) => {
    
    return {
        type: SET_USERS_TOTAL_COUNT,
        count: usersTotalCount
    };
}


export default usersReducer;