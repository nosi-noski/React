import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.image}></div>
            <div>
                <div className={classes.logo}></div>
                <div className={classes.userDescription}>Profile info description</div>
            </div>
            
        </div>
    );
};

export default ProfileInfo;