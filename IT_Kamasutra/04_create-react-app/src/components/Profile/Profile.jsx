import React from 'react';
import classes from './Profile.module.css';
import MyPosts from '../Profile/MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={classes.image}></div>
            <div>
                <div className={classes.logo}></div>
                <div className="user-description">description</div>
            </div>
            <div className="user-feed">
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;