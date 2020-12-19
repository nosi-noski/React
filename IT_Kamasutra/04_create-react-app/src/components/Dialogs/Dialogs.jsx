import React from 'react';
import classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'



// let dialogs = [
//     {id: 1, name: 'Ivan'},
//     {id: 2, name: 'Sergey'},
//     {id: 3, name: 'Stas'},
//     {id: 4, name: 'Nataliya'}
// ];

// let messages = [
//     {id: 1, userid: 1, message: 'Hi'},
//     {id: 2, userid: 1, message: 'How are you?'},
//     {id: 3, userid: 1, message: 'Have you ever coded in React?'},
//     {id: 4, userid: 1, message: 'I have special offer for you)) Text me back, please)'},
// ];


const Dialogs = (props) => {
    debugger
    let dialogsElements = props.dialogs.map( (d) => <DialogItem name={d.name} dialogId={d.id} key={d.id}/>);
    let messagesElements = props.messages.map( (m) => <MessageItem message={m.message} key={m.id}/>);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                { dialogsElements }
			</div>
					
			<div className={classes.messages}>
                { messagesElements }
			</div>
		</div>
	);
}

export default Dialogs;