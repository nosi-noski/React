const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState =  {
            
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1, 
                userid: action.userid, 
                message: state.newMessageText
            };
    
            state.messages.push(newMessage);
            state.newMessageText = '';
            
            action.addButton.disabled = true;
            action.removeButton.disabled = true;
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
        
            var isDisabled = action.newMessageText.length > 0 ? false : true;
            action.addButton.disabled = isDisabled;
            action.removeButton.disabled = isDisabled;
            return state;

        default :
            return state;
    }

};

export const sendNewMessageCreator = (action) => {
    return {
        type: ADD_MESSAGE,
        userid: action.userid,
        addButton: action.addButton,
        removeButton: action.removeButton,
        messagesElement: action.messagesElement
    }
};

export const updateNewMessageBodyCreator = ( action ) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newMessageText: action.newMessageText,
        addButton: action.addButton,
        removeButton: action.removeButton
    }
};

export default dialogsReducer;