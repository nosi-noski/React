import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator, chosePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = (props) => { 
    return (     
        <StoreContext.Consumer>
            { 
                (store)=> { 
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch( addPostActionCreator() );
                    };
                
                    let changePost = (text) => {     
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                
                    let chosePost = (id) => {
                        let action = chosePostActionCreator(id)
                        store.dispatch(action);
                    };
                
                    let removePost = () => {
                        alert("Remove post");
                    };

                    return <MyPosts    
                        updateNewPostText={ changePost }
                        addPost={ addPost } 
                        removePost={ removePost }
                        chosePost={ chosePost }
                        posts={ state.profilePage.posts }
                        newPostText={ state.profilePage.newPostText }
                    />    
                } 
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;