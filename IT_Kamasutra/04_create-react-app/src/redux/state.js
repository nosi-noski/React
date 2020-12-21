import {renderEntireTree} from '../render'

let state  = {

    profilePage: {
        posts : [
            { id: 1, likescount: 1, post: 'Hi, how are you?' },
            { id: 2, likescount: 11, post: 'It\'s my first post' }
        ]
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
            { id: 2, userid: 1, message: 'Hi' },
            { id: 3, userid: 2, message: 'How are you?' },
            { id: 4, userid: 2, message: 'Have you ever coded in React?' },
            { id: 5, userid: 2, message: 'I have special offer for you)) Text me back, please)' }
        ]
    },
    
    friends: {

    },

    sitebar: {

    }

};

export let addPost = (postMessage) => {
    
    let newPost =  { 
        id: state.profilePage.posts.length + 1, 
        post: postMessage,
        likescount: 0  
    };

    state.profilePage.posts.push(newPost);

    renderEntireTree(state); 
};

export default state;