import React from 'react';
import classes from './Users.module.css'
import undefinedUser from '../../assets/img/undefined-user.svg'
import { NavLink } from 'react-router-dom';


let User = ({user, key, followingInProgress, follow, unfollow}) => {
    return (
            <div className={classes.userContainer} key={key}>

                <div className={classes.userIcon}>
                    <div src={user.photoUrl}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small: undefinedUser} alt="#" className={classes.photoUrl}/>
                        </NavLink>
                    </div>
                </div>

                <div className={classes.userName}>
                        <div>Name: {user.name}</div>
                        <div>Status: {user.status}</div>
                        <div>Id: {user.id}</div>
                </div>
                
                <div className={classes.follow}>
                    { user.followed 
                        ? <button disabled={ followingInProgress.some( (id) => id === user.id) }    
                                onClick = { () => { unfollow(user.id); } }>Unfollow</button> 

                        : <button disabled={followingInProgress.some( (id) => id === user.id)}
                            onClick = { () => { 
                                follow(user.id);
                            } 
                        }>Follow</button>}
                </div>
            </div>
    )
}
    
   
            
    

export default User;