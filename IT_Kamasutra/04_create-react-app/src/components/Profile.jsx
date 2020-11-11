import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <div className="bck-image"></div>
            <div>
                <div className="user-logo"></div>
                <div className="user-description">description</div>
            </div>
            <div className="user-feed">
                
                <div className="my-post">my-post
                    <div className="new-post">new-post</div>
                    <div className="posts">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;