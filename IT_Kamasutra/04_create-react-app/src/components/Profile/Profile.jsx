import React from 'react';

import MyPostContainer from '../Profile/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo profile={props.profile} 
                         statusText={props.statusText}
                         setUserStatusThunkCreator={props.setUserStatusThunkCreator}/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;