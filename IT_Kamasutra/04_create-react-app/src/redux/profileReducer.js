import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CHOSE_POST_TEXT = "CHOSE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    posts : [
        { id: 1, likescount: 1, post: 'Hi, how are you?' },
        { id: 2, likescount: 11, post: 'It\'s my first post' }
    ],
    chosenPostId: [],
    profile: null,
    statusText: ''
};

const profileReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case ADD_POST: {
            
            let newPost =  { 
                id: state.posts.length + 1, 
                post: action.newPostText,
                likescount: 0  
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
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

        case SET_USER_STATUS:
            return {
                ...state,
                statusText: action.statusText
            } 

        default :
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText:newPostText
    }
};

export const chosePostActionCreator = (id) => {
    return {
        type: CHOSE_POST_TEXT, 
        id: id
    }
};



export const setUserProfile = (profile)=> {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};


export const getUserStatus = (statusText)=> {
    
    return {
        type: SET_USER_STATUS,
        statusText: statusText
    }
};


// Thunks Creators
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then( (response) => {
            dispatch( setUserProfile(response.data) );
        })
    }
};


export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then( (response) => { 
            dispatch( getUserStatus(response.data) );
         } )
    }
}


export const setUserStatusThunkCreator = (statusText) => {
    return (dispatch) => {
        profileAPI.setStatus(statusText)
        .then( (response) => {
            if (response.data.resultCode === 0) {
                dispatch( getUserStatus(statusText) );
            }
            
        })
    }
}



export default profileReducer;