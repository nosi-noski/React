import React from 'react';
// import UsersAPIComponent from './UsersAPIComponent'
import Users from './Users'
import * as axios from 'axios';
import { follow, 
         unfollow, 
         setUsers, 
         setCurrentPage, 
         setUsersTotalCount, 
         setIsFetching } from '../../redux/userReducer';
import { connect } from 'react-redux';


class UsersAPIContainer extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.setIsFetching(true);
        
        let users = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(users).then(response => {
            this.props.setIsFetching(false);
              
            this.props.setUsers( [...response.data.items] );
            
            this.props.setUsersTotalCount( response.data.totalCount );
           
        });
    }

    setCurrentPage = (currentPage) => { 
        this.props.setIsFetching(true);
        this.props.setCurrentPage(currentPage);
        let users = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`;
        axios.get(users).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers( [...response.data.items] );
        });
    }

    render = () => {
        
        return <Users 
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            usersTotalCount={this.props.usersTotalCount}
            isFetching={this.props.isFetching}
                    
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setCurrentPage={this.setCurrentPage}
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
        isFetching: state.usersPage.isFetching
    }
};

// const mapDispatchToProps = ( dispatch ) => {
    
//        return {
//         follow: ( userid ) => {
//             dispatch( followAC( userid ) );
//         },

//         unfollow: ( userid ) => {
//           dispatch( unfollowAC( userid ) );
//         },

//         setUsers: ( users ) => {
//             dispatch( serUsersAC( users ) )
//         },

//         setCurrentPage: ( currentPage )=>{
//             dispatch( serCurrentPageAC( currentPage ) )
//         },

//         setUsersTotalCount: ( totalCount ) => {
//             dispatch( setUsersTotalCountAC( totalCount ) )
//         },

//         toggleIsFetching: ( isFetching ) => {
//             dispatch( setIsFetching( isFetching ) )
//         }

//     }
// };

export default connect( mapStateToProps, {
        //follow: followAC,
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setIsFetching
    } )( UsersAPIContainer );