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
         getIsAuth
} from './../../redux/userSelectors'
class UsersAPIContainer extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        
        //================ 1 - Сначала был просто axios ================
        // this.props.setIsFetching(true);
        // let users = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        // axios.get(users, {withCredentials: true} )
        //--============================================================

        //--================ 2 - Затем вынесли axios в api ================
        // userAPI.getUsers( this.props.currentPage, this.props.pageSize )
        // .then( response => {
        //     this.props.setIsFetching( false );
        //     this.props.setUsers( [...response.items] );
        //     this.props.setUsersTotalCount( response.totalCount );
        // });
        //--===============================================================

        //--================ 3 - Затем вынесли api и action creators в thunk
        this.props.getUsersThunkCreator( this.props.currentPage, this.props.pageSize );
    }

    setCurrentPage = ( choosedPage ) => { 

        //this.props.setIsFetching( true );
        //this.props.setCurrentPage( currentPage );

        // let users = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`;
        // axios.get(users, {withCredentials: true})
  
        // userAPI.getUsers( currentPage, this.props.pageSize )
        // .then( response => {
        //     this.props.setIsFetching( false );
        //     this.props.setUsers( [...response.items] );
        // });

        this.props.getUsersThunkCreator( choosedPage, this.props.pageSize );

    }

    render = () => {
        console.log('UserContainer - render');
        
        return <Users 
            users={this.props.users}
            pageSize={this.props.pageSize}
    
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
    console.log('UserContainer - mapStateToProps');
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        usersTotalCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};


export default compose (
    connect( mapStateToProps, {
        getUsersThunkCreator: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator
    }),
    withAuthRedirect
)(UsersAPIContainer);

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