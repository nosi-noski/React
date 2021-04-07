import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CHOSE_POST_TEXT = "CHOSE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";


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

        case DELETE_POST : {

            return {
                ...state,
                posts: state.posts.filter( (p) => { return p.id != action.postId})
            }  
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

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile, 
                    photos: action.photos
                }
            }
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

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
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

export const savePhotoSuccess = (photos)=> {
    
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos: photos
    }
};




// START Thunks Creators
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        
        let response = await profileAPI.getProfile(userId);
        dispatch( setUserProfile(response.data) );
    }
};




export const getUserStatusThunkCreator = (userId) => {
    return async (dispatch) => {

        let response = await profileAPI.getStatus(userId);
        dispatch( getUserStatus(response.data) );
    }
}


export const setUserStatusThunkCreator = (statusText) => {
    return async (dispatch) => {

        let response = await profileAPI.setStatus(statusText);
        if (response.data.resultCode === 0) {
            dispatch( getUserStatus(statusText) );
        } 
    }
}

export const savePhotoThunkCreator = file => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            debugger
           dispatch( savePhotoSuccess(response.data.data.photos) );
        }
    }
}

// END Thunks Creators

export default profileReducer;