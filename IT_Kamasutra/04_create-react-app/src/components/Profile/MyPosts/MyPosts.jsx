import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

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
               <Post message="Hi, how are you?"/>
               <Post message="It\'s my first post"/>
               <Post/>
            </div>
        </div>
               

    );
}

export default MyPosts;