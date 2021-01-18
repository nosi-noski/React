import React from 'react';
import classes from './Profile.module.css';
import MyPostContainer from '../Profile/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;