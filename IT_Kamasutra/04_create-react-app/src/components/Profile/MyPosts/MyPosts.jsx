import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div className="my-post">my-post</div>
            <div> 
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className="posts">
                <div className={classes.item}>
                    <div className={classes.logo}></div>
                    Post one
                </div>
                <div className={classes.item}> Post two</div>
            </div>
        </div>
               

    );
}

export default MyPosts;