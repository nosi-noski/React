import React from 'react';
import classes from'./Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

	let path = "/dialogs/" + '' + props.dialogId;

	return (
		<div className={classes.dialog}>
			<NavLink 
				to={path} activeClassName={classes.activeLink}>
				   {props.name}
			</NavLink>
		</div>
	);
}

const MessageItem = (props) => {
	return (
		<div className={classes.message}>{props.message}</div>
	);
};

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name = "Ivan"		dialogId='1'/>
				<DialogItem name = "Sergey"		dialogId='2'/>
				<DialogItem name = "Stas"		dialogId='3'/>
				<DialogItem name = "Nataliya"	dialogId='4'/>
			</div>
					
			<div className={classes.messages}>
				<MessageItem message = "Hi"/>
				<MessageItem message = "How are you?"/>
				<MessageItem message = "Have you ever coded in React?"/>
				<MessageItem message = "I have special offer for you)) Text me back, please)"/>
			</div>
		</div>
	);
}

export default Dialogs;