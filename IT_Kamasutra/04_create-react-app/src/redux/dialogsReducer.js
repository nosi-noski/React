const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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