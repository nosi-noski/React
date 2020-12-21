import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElements = props.posts.map((p)=><Post message={p.post} likescount={p.likescount} key={p.id}/>)

    let addPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let removePost = () => {alert("Remove post")};

    let newPostElement = React.createRef();

    return (
        <div className={classes.myPostsWrapper}>
            <h3>my-post</h3>
            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea 
                        onChange={onPostChange} 
                        ref={newPostElement} 
                        value={props.newPostText}/>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button  onClick={ addPost }>Add Post</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button onClick={ removePost }>Remove Post</button> 
                    </div> 
                </div>
            </div>
            <div className={classes.posts}>
               {/* <Post message={postsData[0].post} likescount={postsData[0].likescount}/>
               <Post message={postsData[1].post} likescount={postsData[1].likescount}/> */}
                { postElements }
            </div>
        </div>
               

    );
}

export default MyPosts;