import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator, chosePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => { 
    ;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    };

    let changePost = (text) => {     
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    let chosePost = (id) => {
        
        let action = chosePostActionCreator(id)
        props.store.dispatch(action);
    }

    let removePost = () => {
        alert("Remove post");
    };


    return ( 
        <MyPosts    
            updateNewPostText={ changePost }
            addPost={ addPost } 
            removePost={ removePost }
            chosePost={ chosePost }
            posts={ state.profilePage.posts }
            newPostText={ state.profilePage.newPostText }
        />
    );
}

export default MyPostsContainer;