import React from 'react';
import Paginator from '../Common/Paginator/Paginator'
import User from './User'

let Users = (props) => {
    return (
        <>
           <Paginator 
                totalCount = {props.usersTotalCount}
                pageSize = {props.pageSize}
                currentPage ={props.currentPage}
                setCurrentPage ={props.setCurrentPage}
                portionSize={props.portionSize}
           />
            { 
                props.users.map(u => { 
                    
                    return (
                        <User 
                            user={u}
                            userKey={u.id}
                            key={u.id}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                        />
                    )
                })
            }    
        </>
    )
}
    
export default Users;