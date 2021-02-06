import React from 'react';
import Users from './Users'
import * as axios from 'axios';

// class UsersAPIComponent extends React.Component {
//     constructor(props){
//         super(props)
//     }
    
//     componentDidMount(){
//         let users = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
//         axios.get(users).then(response => {
                
//             this.props.setUsers( [...response.data.items] );
            
//             this.props.setUsersTotalCount( response.data.totalCount );
//         });
//     }

//     setCurrentPage = (currentPage) => { 
//         this.props.setCurrentPage(currentPage);
//         let users = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`;
//         axios.get(users).then(response => {
                
//             this.props.setUsers( [...response.data.items] );
//         });
//     }

//     render = () => {
        
//         return <Users 
//             users={this.props.users}
//             usersTotalCount={this.props.usersTotalCount}
//             pageSize={this.props.pageSize}
//             currentPage={this.props.currentPage}
//             setCurrentPage={this.setCurrentPage}
//             unfollow={this.props.unfollow}
//             follow={this.props.follow}
//         />
//     }
       
        


// };

// export default UsersAPIComponent;