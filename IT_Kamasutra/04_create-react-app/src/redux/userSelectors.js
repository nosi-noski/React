import { createSelector } from "reselect";

// simple selectors


export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getUsersTotalCount = (state) => {
    return state.usersPage.usersTotalCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};

export const getIsAuth = (state) => {
    return state.usersPage.isAuth;
};


// selectors [reselect]

export const getUsersFiltered = (state) => {
    return getUsers(state).filter( (u)=> {
        return true;    
    });
};

const getUsers = (state) => {
    return state.usersPage.users;
};

export const getUsersSelector = createSelector( 
    getUsers,
    getIsFetching,
    (users, isFetching) => { return users.filter( u => true ) }
)