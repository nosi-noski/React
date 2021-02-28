import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';


let store = {
    _state: {
        profilePage: {
            posts : [
                { id: 1, likescount: 1, post: 'Hi, how are you?' },
                { id: 2, likescount: 11, post: 'It\'s my first post' }
            ],
            newPostText: 'default post text'
        },
        dialogsPage : {
            
            dialogs : [
                { id: 1, name: 'Ivan' },
                { id: 2, name: 'Sergey' },
                { id: 3, name: 'Stas' },
                { id: 4, name: 'Nataliya' }
            ],
            messages : [
                { id: 1, userid: 2, message: 'Hi' },
                { id: 2, userid: 0, message: 'Hi' },
                { id: 3, userid: 2, message: 'How are you?' },
                { id: 4, userid: 2, message: 'Have you ever coded in React?' },
                { id: 5, userid: 2, message: 'I have special offer for you)) Text me back, please)' }
            ],
            newMessageText: ''
        },
        friends: {

        },
        sidebar: {
            
        }
    },

    _callSubscriber () {
        console.log('state was changed')
    },

    getState (){
        return this._state;
    },

    

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    
    // addPost (){
    //     let newPost =  { 
    //         id: this._state.profilePage.posts.length + 1, 
    //         post: this._state.profilePage.newPostText,
    //         likescount: 0  
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state); 
    // },

    // updateNewPostText (postMessage) {
    //     this._state.profilePage.newPostText = postMessage;
    //     this._callSubscriber(this._state); 
    // },

    dispatch( action ){
        
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);
       
        this._callSubscriber(this._state);
    }
   

};

export const getAuthorName = (authorId, array) => {

    let length = array.length;
    if(authorId === 0) return "Me";
        for (let i = 0; i < length; i++){
            if ( array[i].id === authorId ){
                return array[i].name;
            }
        }
        
};

export default store;
//window.store = store;