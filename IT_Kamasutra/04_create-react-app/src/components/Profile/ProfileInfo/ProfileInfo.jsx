import React from 'react';
import classes from './ProfileInfo.module.css'
import undefinedUser from './../../../assets/img/undefined-user.svg'

import Preloader from './../../Common/Loader/Loader'
import SocialMediaIcon from './../../Common/SocialMediaIcon/SocialMediaIcon'
import vk from './../../../assets/img/vk.png'
import vkBlank from './../../../assets/img/vk-blank.png'
import twitter from './../../../assets/img/twitter.png'
import twitterBlank from './../../../assets/img/twitter-blank.png'
import instagram from './../../../assets/img/instagram.png'
import instagramBlank from './../../../assets/img/instagram-blank.png'
import github from './../../../assets/img/github.png'
import githubBlank from './../../../assets/img/github-blank.png'
import facebook from './../../../assets/img/facebook.png'
import facebookBlank from './../../../assets/img/facebook-blank.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    
    if ( !props.profile ) {
        return <Preloader/>
    } 
    
    let photo = ( props.profile && props.profile.photos && props.profile.photos.large ) || undefinedUser;
    
    
    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.image}></div>
            <div className={classes.photo}>
                <img src={ photo } alt="" />
            </div>
            
            {/* <div className={classes.userName}>ФИО</div> */}
            <h3 style={{margin: 0 + 'px'}}>
                <div className={classes.userNameVal}>{props.profile.fullName}</div>
            </h3>
            <div className={classes.userStatus}>
                <ProfileStatusWithHooks statusText={props.statusText}                             
                                        setUserStatusThunkCreator={props.setUserStatusThunkCreator}
                />
            <hr/>
            </div>   
           
            {/* <div className={classes.aboutMeContainer}> */}
                <div className={classes.aboutMe}>aboutMe</div>
                <div className={classes.aboutMeVal}>{props.profile.aboutMe}</div>
            {/* </div> */}
            

            <div className={classes.lookingForAJob}>lookingForAJob</div>
            <div className={classes.lookingForAJobVal}>{props.profile.lookingForAJob ? "Да" : "Нет"}</div>

            <div className={classes.lookingForAJobDescr}>lookingForAJobDescription</div>
            <div className={classes.lookingForAJobDescrVal}>{props.profile.lookingForAJobDescription}</div>
            
            <div className={classes.socialMediaRow}>
                <SocialMediaIcon props={ { 
                                            icon: props.profile.contacts.vk ?  vk : vkBlank,
                                            url:  props.profile.contacts.vk } }/>
                <SocialMediaIcon props={ { 
                                            icon: props.profile.contacts.facebook ?  facebook : facebookBlank,
                                            url:  props.profile.contacts.facebook } }/>
                <SocialMediaIcon props={ { 
                                            icon: props.profile.contacts.twitter ? twitter : twitterBlank,
                                            url:  props.profile.contacts.twitter } }/>
                <SocialMediaIcon props={ { 
                                            icon: props.profile.contacts.instagram ?  instagram : instagramBlank,
                                            url:  props.profile.contacts.instagram } }/>
                <SocialMediaIcon props={ { 
                                            icon: props.profile.contacts.github ? github : githubBlank,
                                            url:  props.profile.contacts.github } }/>                                              
            </div>
           

            {/* <div className={classes.userDescription}>Profile info description</div> */}
           
           
            
        </div>
    );
};

export default ProfileInfo;