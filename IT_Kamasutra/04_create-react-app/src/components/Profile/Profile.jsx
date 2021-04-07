import React from 'react';

import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo profile={props.profile} 
                         statusText={props.statusText}
                         setUserStatusThunkCreator={props.setUserStatusThunkCreator}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         /> 
            <MyPostContainer/>
        </div>
    );
}

export default Profile;