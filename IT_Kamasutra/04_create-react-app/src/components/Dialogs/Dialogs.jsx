import React, { useState, useEffect }  from 'react';
import classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
    
    let state = props.dialogsPage;
     
    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} dialogId={d.id} key={d.id}/>);
    let messagesElements = state.messages.map( (m, i, arr) => {
    debugger
    let order= {
        samePrevUserId: i > 0 && m.userid === arr[i-1].userid ? true : false,
        sameNextUserId: i < arr.length-1 && m.userid === arr[i+1].userid ? true : false
    } 
   
    return <MessageItem props={props} order={order} message={m.message} userid={m.userid} key={m.id}/>
    } );
    
    let onAddMessage = () => {
        let action = { 
            userid: 0,
            addButton: addMessageElement.current,
            removeButton: removeMessageElement.current,
            messagesElement : messagesElement.current
        };
        props.addMessage(action)
     
    };

    let onChangeMessage = () => {
        //let text = newMessageElement.current.value;
        let action = { 
            newMessageText: newMessageElement.current.value,
            addButton: addMessageElement.current,
            removeButton: removeMessageElement.current
        };
        props.changeNewMessage(action);
    }; 

    let onRemoveMessage = () => {
        props.removeMessage();
    };
    
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
					
			<div className={ classes.messages }
                 ref={ messagesElement } >
                { messagesElements }
			</div>

            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea   
                        ref={ newMessageElement } 
                        value={ state.newMessageText }
                        onChange={ onChangeMessage }
                        placeholder="New message">     
                    </textarea>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button ref={addMessageElement} 
                                onClick={ onAddMessage }>Add message</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button ref={removeMessageElement}  
                                onClick={ onRemoveMessage }>Remove message</button> 
                    </div> 
                </div>
            </div>
		</div>
	);
}

export default Dialogs;