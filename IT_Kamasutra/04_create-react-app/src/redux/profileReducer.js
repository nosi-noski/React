const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CHOSE_POST_TEXT = "CHOSE-POST-TEXT";

let initialState = {
    posts : [
        { id: 1, likescount: 1, post: 'Hi, how are you?' },
        { id: 2, likescount: 11, post: 'It\'s my first post' }
    ],
    newPostText: '',
    chosenPostId: []
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

}

export const updateNewPostTextActionCreator = ( postMessage ) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        postMessage: postMessage 
    }
};
export default profileReducer;