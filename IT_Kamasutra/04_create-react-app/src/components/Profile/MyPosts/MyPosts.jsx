import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => { 
  
   
    
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    let onChosePost = (id) => {
        debugger
        props.chosePost(id);
    };

    let onRemovePost = () => {
        props.removePost();
    };

    let newPostElement = React.createRef();
    let postElements = props.posts.map((p)=><Post message={p.post} 
                                                  likescount={p.likescount} 
                                                  key={p.id.toString()} 
                                                  chosePost={()=>{onChosePost(p.id)} }/>)

    return (
        <div className={classes.myPostsWrapper}>
            <h3>my-post</h3>
            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea 
                        onChange={ onPostChange } 
                        ref={newPostElement} 
                        value={props.newPostText}
                        placeholder="New post"/>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button  onClick={ onAddPost }>Add Post</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button onClick={ onRemovePost }>Remove Post</button> 
                    </div> 
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
               

    );
}

export default MyPosts;