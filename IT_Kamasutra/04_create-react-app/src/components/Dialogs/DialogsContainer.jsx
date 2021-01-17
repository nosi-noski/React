
import Dialogs from './Dialogs'
import {sendNewMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';


const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let addMessage = (body) => {
        props.store.dispatch( sendNewMessageCreator(body))
    };

    let changeMessage = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body))
    }; 

    let removeMessage = () => {alert("Remove post1")};

	return (
        <Dialogs changeNewMessage={changeMessage} 
                 addMessage={addMessage} 
                 removeMessage={removeMessage}
                 dialogsPage={state}
                 />
	);
}

export default DialogsContainer;