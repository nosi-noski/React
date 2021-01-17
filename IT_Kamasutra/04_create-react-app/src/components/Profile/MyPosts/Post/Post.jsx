import React from 'react';
import classes from './Post.module.css';


const Post = ( props ) => {
    
    let onChosePost = ( ) => {
        
        props.chosePost();
    };

    return (
        <div className={ classes.item } 
             onClick={ onChosePost } 
            >
            <div className={ classes.logo }></div>
            <div className={ classes.message }>
                <span>{ props.message }</span>
            </div>
            <div className={ classes.like }>
                <span>Like </span>
                <span>{ props.likescount }</span>
            </div>
            
        </div>
    );
}

export default Post;