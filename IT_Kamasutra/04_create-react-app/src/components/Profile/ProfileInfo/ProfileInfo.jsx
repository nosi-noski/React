import React from 'react';
import classes from './ProfileInfo.module.css'
import userLogo from './../../../assets/img/user-logo.png'
import Preloader from './../../Common/Loader/Loader'


const ProfileInfo = (props) => {
    
    if ( !props.profile ) {
        return <Preloader/>
    } 
    
    let photo = ( props.profile && props.profile.photos && props.profile.photos.large ) || userLogo;

    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.image}></div>
            <div className={classes.photo}>
                <img src={ photo } alt="" />
            </div>
            <div className={classes.userName}>ФИО</div>
            <div className={classes.userNameVal}>{props.profile.fullName}</div>

            <div className={classes.aboutMe}>aboutMe</div>
            <div className={classes.aboutMeVal}>{props.profile.aboutMe}</div>

            <div className={classes.lookingForAJob}>lookingForAJob</div>
            <div className={classes.lookingForAJobVal}>{props.profile.lookingForAJob ? "Да" : "Нет"}</div>

            <div className={classes.lookingForAJobDescr}>lookingForAJobDescription</div>
            <div className={classes.lookingForAJobDescrVal}>{props.profile.lookingForAJobDescription}</div>
            
            <div className={classes.facebook}>facebook</div>
            <div className={classes.facebookVal}>
                <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
            </div>
           
            <div className={classes.github}>github</div>
            <div className={classes.githubVal}>
                <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a>
            </div>
           
            <div className={classes.instagram}>instagram</div>
            <div className={classes.instagramVal}>
                <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
            </div>
            
            <div className={classes.twitter}>twitter</div>
            <div className={classes.twitterVal}>
                <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
            </div>
            
            <div className={classes.vk}>vk</div>
            <div className={classes.vkVal}>
                <a target="_blank" href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
            </div>

            {/* <div className={classes.userDescription}>Profile info description</div> */}
           
           
            
        </div>
    );
};

export default ProfileInfo;