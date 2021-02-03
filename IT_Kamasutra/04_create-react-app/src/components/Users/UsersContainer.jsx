import React from 'react';
import Users from './Users'
import { followAC, unfollowAC, serUsersAC, serCurrentPageAC, setUsersTotalCountAC } from '../../redux/userReducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    // console.log(state)
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        follow: ( userid ) => {
            dispatch( followAC( userid ) );
        },

        unfollow: ( userid ) => {
          dispatch( unfollowAC( userid ) );
        },

        setUsers: ( users ) => {
            dispatch( serUsersAC( users ) )
        },

        setCurrentPage: ( currentPage )=>{
            dispatch( serCurrentPageAC( currentPage ) )
        },

        setUsersTotalCount: ( totalCount ) => {
            dispatch( setUsersTotalCountAC( totalCount ) )
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users) 