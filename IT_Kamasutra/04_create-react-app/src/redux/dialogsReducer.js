const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState =  {
            
    dialogs : [
        { id: 1, name: 'Ivanov Ivan Ivanovich'},
        { id: 2, name: 'Sergey'},
        { id: 3, name: 'Stas'},
        { id: 4, name: 'Nataliya'}
    ],
    messages : [
        { id: 1, userid: 2, message: 'Hi' },
        { id: 2, userid: 0, message: 'Hi' },
        { id: 3, userid: 2, message: 'How are you?' },
        { id: 4, userid: 2, message: 'Have you ever coded in React?' },
        { id: 5, userid: 2, message: 'I have special offer for you)) Text me back, please)' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1, 
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }

        default :
            return state;
    }
};

export const sendNewMessageCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    }
};


export default dialogsReducer;