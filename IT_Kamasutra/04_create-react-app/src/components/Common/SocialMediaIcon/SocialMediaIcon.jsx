import React from 'react'
import classes from './SocialMediaIcon.module.css'
import {BrowserRouter, Route} from "react-router-dom";

let SocialMediaIcon = (props) => {
    
    return (
        <div className={classes.iconWrapperClass}>
            <a href={props.props.url} target="blank">
                <img src={props.props.icon} alt="" className={classes.iconClass}/>
            </a>
            
        </div>
    );
};

export default SocialMediaIcon;