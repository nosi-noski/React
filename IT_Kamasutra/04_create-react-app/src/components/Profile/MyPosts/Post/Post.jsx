import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.logo}></div>
    <div className={classes.message}><span>{props.message}</span></div>
            <span>Like</span>
        </div>
    );
}

export default Post;