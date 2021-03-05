import React from 'react';
import classes from './Users.module.css'
import lightbulb from  '../../assets/img/light-bulb-64.png'
import undefinedUser from '../../assets/img/undefined-user.svg'
import Loader from './../Common/Loader/Loader'
import { NavLink, withRouter, RouteProps } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from './../../api/api'

let Users = (props) => {

    let pagesCount = Math.ceil( props.usersTotalCount / props.pageSize) ;
    let pages = [];

    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }
    //console.log("props.toggleIsFollowingProgress", props.toggleIsFollowingProgress)
    
    return (
        <>
            {  props.isFetching ? <Loader props={props}/> : null   }
            <div className={classes.paginator}>
                { 
                    
                    pages.map( (elem) => {
                        let bold = props.currentPage === elem ?  'selectedPage' : '';
                        return <span onClick={ (e)=> { props.setCurrentPage(elem) }}
                                     key={elem}
                                     className={ classes.pageNumber + ' ' + classes[bold] 
                                }>{elem}</span>
                    })
                }
            
            </div>  
            {
                props.users.map(u => {
                    
                    return (
                        <div className={classes.userContainer} key={u.id}>

                            <div className={classes.userIcon}>
                                <div src={u.photoUrl}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small: undefinedUser} alt="#" className={classes.photoUrl}/>
                                    </NavLink>
                                </div>
                            </div>
                            <div className={classes.userName}>
                                
                                    <div>Name: {u.name}</div>
                                    <div>Status: {u.status}</div>
                                    <div>Id: {u.id}</div>
                            </div>
                            <div className={classes.follow}>
                                    { u.followed 
                                        ? <button disabled={ props.followingInProgress.some( (id) => id === u.id) }    
                                                onClick = { () => { props.unfollow(u.id); } }>Unfollow</button> 

                                        : <button disabled={props.followingInProgress.some( (id) => id === u.id)}
                                            onClick = { () => { 
                                                props.follow(u.id);
                                                // props.toggleIsFollowingProgress(true, u.id);
                                                // userAPI.followUser(u.id).then(response => {
                                                //     if( response.data.resultCode === 0) {
                                                //         props.follow ( u.id );
                                                //     }
                                                //     props.toggleIsFollowingProgress(false, u.id);
                                                // });
                                            } 
                                        }>Follow</button>}
                            </div>
                        </div>
                    )
                })
            }    
        </>
    )
}
    
   
            
    

export default Users;