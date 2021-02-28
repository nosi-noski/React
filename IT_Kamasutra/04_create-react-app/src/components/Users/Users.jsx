import React from 'react';
import classes from './Users.module.css'
import lightbulb from  '../../assets/img/light-bulb-64.png'
import undefinedUser from '../../assets/img/undefined-user.svg'
import Loader from './../Common/Loader/Loader'
import { NavLink, withRouter, RouteProps } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil( props.usersTotalCount / props.pageSize) ;
    let pages = [];

    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }
    
    return (
        <>
            {  props.isFetching ? <Loader props={props}/> : null}
            <div className={classes.paginator}>
                { 
                    
                    pages.map( (elem) => {
                        let bold = props.currentPage === elem ?  'selectedPage' : '';
                        return <span 
                                    onClick={ (e)=> { props.setCurrentPage(elem) }}
                                    key={elem}
                                    className={ classes.pageNumber + ' ' + classes[bold] }>{elem}</span>
                    })
                }
            
            </div>  
            {
                props.users.map(u => {
                    
                    return <div className={classes.userContainer} key={u.id}>
                        <div className={classes.follow}>
                                { u.followed 
                                    ? <button onClick = { 
                                        () => { 
                                            
                                            let unfollow = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                                            axios.delete(
                                                unfollow, 
                                                {}, 
                                                {
                                                    withCredentials: true, 
                                                    headers: {
                                                        "API-KEY": '281833bb-2ecf-4416-a0dc-dfa4fdba3f29' 
                                                    }
                                                } ).then(response => {
                                                if( response.data.resultCode === 0) {
                                                    props.unfollow ( u.id );
                                                }
                                            });
                                        } 
                                    }> Unfollow </button> 
                                    : <button onClick = { 
                                        () => { 
                                            let follow = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                                            axios.post(
                                                follow, 
                                                {}, 
                                                {
                                                    withCredentials: true, 
                                                    headers: {
                                                        "API-KEY": '281833bb-2ecf-4416-a0dc-dfa4fdba3f29' 
                                                    }
                                                } ).then(response => {
                                                if( response.data.resultCode === 0) {
                                                    props.follow ( u.id )  
                                                }
                                            });
                                            
                                        } 
                                    }> Follow </button>}
                        </div>
                       
                        <div className={classes.userIcon}>
                            <div src={u.photoUrl}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small: undefinedUser} alt="#" className={classes.photoUrl}/>
                                </NavLink>
                            </div>
                        </div>
                        <div className={classes.userName}>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                {/* <div>{ u.location.city.name }</div> */}
                                {/* <div>{ u.location.  }</div> */}

                                
                            </span>
                        </div>
                    </div>
                })
            }    
        </>
    )
}
    
   
            
    

export default Users;