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
        this.props.getUsers( this.props.currentPage, this.props.pageSize );
    }

    setCurrentPage = ( currentPage ) => { 

        //this.props.setIsFetching( true );
        //this.props.setCurrentPage( currentPage );

        // let users = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`;
        // axios.get(users, {withCredentials: true})
  
        // userAPI.getUsers( currentPage, this.props.pageSize )
        // .then( response => {
        //     this.props.setIsFetching( false );
        //     this.props.setUsers( [...response.items] );
        // });

        this.props.getUsers( currentPage, this.props.pageSize );

    }

    render = () => {
        
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
            // followSuccess={this.props.followSuccess}
            // unfollowSuccess={this.props.unfollowSuccess}
            // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            
            
            
        />
    }
};

const mapStateToProps = (state) => {
    // console.log(state)
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};
/*
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

            toggleIsFetching: ( isFetching ) => {
                dispatch( setIsFetching( isFetching ) )
            }

        }
    };
*/
export default connect( mapStateToProps, {
        // follow: followAC,
        // followSuccess, 
        // unfollowSuccess,
        // setUsers, 
        // setCurrentPage,
        // setUsersTotalCount,
        // setIsFetching,
        // toggleIsFollowingProgress, 
        getUsers: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator
    } )( UsersAPIContainer );