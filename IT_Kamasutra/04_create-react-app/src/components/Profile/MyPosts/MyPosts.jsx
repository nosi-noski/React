import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.myPostsWrapper}>
            <h3>my-post</h3>
            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea></textarea>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button>Add Post</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button>Remove Post</button> 
                    </div> 
                </div>
            </div>
            <div className={classes.posts}>
               <Post message="Hi, how are you?" likescount="1"/>
               <Post message="It\'s my first post" likescount="2"/>
               <Post/>
            </div>
        </div>
               

    );
}

export default MyPosts;