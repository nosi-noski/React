import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator, chosePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'
// import StoreContext from '../../../StoreContext'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch( action );
        },

        updateNewPostText: (text) => {     
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },

        removePost: () => {
            alert("Remove post");
        },

        chosePost: (id) => {
            let action = chosePostActionCreator(id)
            dispatch(action);
        }
    };
}
const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )(MyPosts);

// const MyPostsContainer = (props) => { 
//     return (     
//         <StoreContext.Consumer>
//             { 
//                 (store)=> { 
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch( addPostActionCreator() );
//                     };
                
//                     let changePost = (text) => {     
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     };
                
//                     let chosePost = (id) => {
//                         let action = chosePostActionCreator(id)
//                         store.dispatch(action);
//                     };
                
//                     let removePost = () => {
//                         alert("Remove post");
//                     };

//                     return <MyPosts    
//                         updateNewPostText={ changePost }
//                         addPost={ addPost } 
//                         removePost={ removePost }
//                         chosePost={ chosePost }
//                         posts={ state.profilePage.posts }
//                         newPostText={ state.profilePage.newPostText }
//                     />    
//                 } 
//             }
//         </StoreContext.Consumer>
//     );
// }

export default MyPostsContainer;