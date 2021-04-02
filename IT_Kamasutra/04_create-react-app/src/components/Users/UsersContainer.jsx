import React from 'react';
// import UsersAPIComponent from './UsersAPIComponent'
import Users from './Users'
import * as axios from 'axios';
import { followSuccess, 
         unfollowSuccess, 
         setUsers, 
         setCurrentPage, 
         setUsersTotalCount, 
         setIsFetching,
         toggleIsFollowingProgress,
         getUsersThunkCreator, 
         followThunkCreator,
         unfollowThunkCreator } from '../../redux/userReducer';
import { connect } from 'react-redux';
import { userAPI } from './../../api/api'
import { Redirect } from 'react-router-dom'
import {withAuthRedirect} from './../../hoc/WithAuthRedirect'
import { compose } from 'redux';
import { getUsersSelector,
         getPageSize,
         getUsersTotalCount,
         getCurrentPage,
         getIsFetching,
         getFollowingInProgress,
         getIsAuth,
         getPortionSize
} from './../../redux/userSelectors'
class UsersAPIContainer extends React.Component {
    constructor(props){
        super(props)  
    }
    
    componentDidMount(){
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator( currentPage, pageSize );
    }

    setCurrentPage = ( choosedPage ) => { 
        let {pageSize} = this.props;
        this.props.getUsersThunkCreator( choosedPage, pageSize );
    }

    render = () => {    
            
        return <Users 
            users={this.props.users}
            pageSize={this.props.pageSize}
            portionSize={this.props.portionSize}
            usersTotalCount={this.props.usersTotalCount}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress} 
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPage={this.setCurrentPage}
            currentPage={this.props.currentPage}       
        />
    }
};

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersTotalCount: state.usersPage.usersTotalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// };

const mapStateToProps = (state) => {  
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        usersTotalCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        portionSize: getPortionSize(state)
    }
};

//let withAuthRedirect = (UsersAPIContainer)
// export default withAuthRedirect ( connect( mapStateToProps, {
//         // follow: followAC,
//         // followSuccess, 
//         // unfollowSuccess,
//         // setUsers, 
//         // setCurrentPage,
//         // setUsersTotalCount,
//         // setIsFetching,
//         // toggleIsFollowingProgress, 
//         getUsers: getUsersThunkCreator,
//         follow: followThunkCreator,
//         unfollow: unfollowThunkCreator
//     } )(UsersAPIContainer) ) ;

export default compose (
    connect( mapStateToProps, {
        getUsersThunkCreator: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator
    }),
    withAuthRedirect
)(UsersAPIContainer);

