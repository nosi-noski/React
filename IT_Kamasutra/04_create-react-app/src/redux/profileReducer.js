const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState =  {
    posts : [
        { id: 1, likescount: 1, post: 'Hi, how are you?' },
        { id: 2, likescount: 11, post: 'It\'s my first post' }
    ],
    newPostText: 'default post text'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            let newPost =  { 
                id: state.posts.length + 1, 
                post: state.newPostText,
                likescount: 0  
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.postMessage;
            return state;

        default :
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = ( postMessage ) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        postMessage: postMessage 
    }
};
export default profileReducer;