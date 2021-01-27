import React from 'react';
import Users from './Users'
import { followAC, unfollowAC, serUsersAC } from '../../redux/userReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch( followAC(userid) );
        },

        unfollow: (userid) => {
          dispatch( unfollowAC(userid) );
        },

        setUsers: (users) => {
            dispatch( serUsersAC(users) )
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users) 