import React, { useState, useEffect }  from 'react';
import classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state';


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} dialogId={d.id} key={d.id}/>);
    let messagesElements = props.state.messages.map( (m) => <MessageItem props = {props} message={m.message} userid={m.userid} key={m.id}/>);
    
    let addMessage = () => {
        
        let text = newMessageElement.current.value;
        console.log( text);
        let action = { 
            userid: 0,
            addButton: addMessageElement.current,
            removeButton: removeMessageElement.current,
            messagesElement : messagesElement.current
        };

        props.dispatch( addMessageActionCreator(action))
    };

    let onMessageChange = () => {
        
        let text = newMessageElement.current.value;
        let action = { 
            newMessageText: text,
            addButton: addMessageElement.current,
            removeButton: removeMessageElement.current
        };
        props.dispatch( updateNewMessageTextActionCreator(action))
    }; 

    let removeMessage = () => {alert("Remove post")};
    
    let messagesElement = React.createRef();
    let newMessageElement = React.createRef();
    let addMessageElement = React.createRef();
    let removeMessageElement = React.createRef();
    
    useEffect(() => {
        messagesElement.current.scrollTo(0, messagesElement.current.scrollHeight);
      });

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                { dialogsElements }
			</div>
					
			<div className={classes.messages}
                 ref={messagesElement} >
                { messagesElements }
			</div>

            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea   ref={newMessageElement} 
                                value={props.state.newMessageText}
                                onChange={onMessageChange}></textarea>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button ref={addMessageElement} 
                                onClick={ addMessage }>Add message</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button ref={removeMessageElement}  
                                onClick={ removeMessage }>Remove message</button> 
                    </div> 
                </div>
            </div>
		</div>
	);
}

export default Dialogs;