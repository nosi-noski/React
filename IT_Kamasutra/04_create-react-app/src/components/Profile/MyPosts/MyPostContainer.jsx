import React from 'react';
import {addPostActionCreator, chosePostActionCreator} from '../../../redux/profileReducer';
import MyPost from './MyPost'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) );
        },

      

        removePost: () => {
            alert("Remove post");
        },

        chosePost: (id) => {
            dispatch( chosePostActionCreator(id) );
        }
    };
}
const MyPostContainer = connect( mapStateToProps, mapDispatchToProps )(MyPost);

export default MyPostContainer;