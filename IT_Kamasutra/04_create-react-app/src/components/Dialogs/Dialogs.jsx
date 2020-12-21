import React from 'react';
import classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} dialogId={d.id} key={d.id}/>);
    let messagesElements = props.state.messages.map( (m) => <MessageItem message={m.message} userid={m.userid} key={m.id}/>);
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };
    let removePost = () => {alert("Remove post")};

    let newPostElement = React.createRef();

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                { dialogsElements }
			</div>
					
			<div className={classes.messages}>
                { messagesElements }
			</div>

            <div className = {classes.newPostArea}>
                <div className={classes.newTextArea}>
                    <textarea ref={newPostElement}></textarea>
                </div> 
                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button  onClick={ addPost }>Add message</button>
                        
                    </div> 
                    <div className={classes.textRemove}>
                        <button onClick={ removePost }>Remove message</button> 
                    </div> 
                </div>
            </div>
		</div>
	);
}

export default Dialogs;