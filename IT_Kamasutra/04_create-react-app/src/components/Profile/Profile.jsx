import React from 'react';
import classes from './Profile.module.css';
import MyPosts from '../Profile/MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts 
                newPostText={props.profilePage.newPostText} 
                posts={props.profilePage.posts} 
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;