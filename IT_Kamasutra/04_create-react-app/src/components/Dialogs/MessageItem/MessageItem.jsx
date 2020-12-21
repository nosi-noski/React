import React from 'react';
import classes from'./MessageItem.module.css';


const MessageItem = (props) => {
    
    let myId = 1;
    let alignText =  props.userid === myId ? 'messageAlignLeft': 'messageAlignRight';
    return (
        <div className={classes.message +' '+ classes[alignText]} >
            <div>{props.message}</div>
            <div className={classes.logo}/>
        </div>
	);
}

export default MessageItem;