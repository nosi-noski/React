const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING'

const initialState = {
    users: [],
    pageSize: 10,
    usersTotalCount: 0,
    currentPage: 1,
    isFetching: false     
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

        default: 
            return state;
    }
}

// export const followAC = (id) => { 
//     return {
//         type: FOLLOW,
//         id
//     };
// }

export const follow = (id) => { 
    return {
        type: FOLLOW,
        id
    };
}

export const unfollow = (id) => { 
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



export default usersReducer;