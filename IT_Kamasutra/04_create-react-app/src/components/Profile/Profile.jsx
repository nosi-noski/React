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
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;