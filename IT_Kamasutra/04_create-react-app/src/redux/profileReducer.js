import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CHOSE_POST_TEXT = "CHOSE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts : [
        { id: 1, likescount: 1, post: 'Hi, how are you?' },
        { id: 2, likescount: 11, post: 'It\'s my first post' }
    ],
    newPostText: '',
    chosenPostId: [],
    profile: null
};

const profileReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case ADD_POST: {
            let newPost =  { 
                id: state.posts.length + 1, 
                post: state.newPostText,
                likescount: 0  
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postMessage
            };
        }

        case CHOSE_POST_TEXT: {
            return {
                ...state,
                chosenPostId: [action.id]
            };
        }

        case SET_USER_PROFILE: 
        
        return {
            ...state,
            profile: action.profile
        }
        default :
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const chosePostActionCreator = (id) => {
    return {
        type: CHOSE_POST_TEXT, 
        id: id
    }
};

export const updateNewPostTextActionCreator = ( postMessage ) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        postMessage: postMessage 
    }
};

export const setUserProfile = (profile)=> {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then( (response) => {
            dispatch( setUserProfile(response.data) );
        })
        
    }
};

export default profileReducer;