import React from 'react';

import MyPostContainer from '../Profile/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;