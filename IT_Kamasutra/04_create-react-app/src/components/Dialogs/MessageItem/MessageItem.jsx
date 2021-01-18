import React from 'react';
import classes from'./MessageItem.module.css';
import {getAuthorName} from '../../../redux/store'

const MessageItem = (props) => {
    

    
    let myId = 0;
    let myCloudColorClass = props.userid === myId ? "blueCloud" : "greenCloud";
    let alignText =  props.userid === myId ? 'messageAlignLeft': 'messageAlignRight';
  
    let authorName =  getAuthorName( props.userid, props.props.dialogsPage.dialogs );
   
    let messageWasHovered = (e) => {
        
        e.currentTarget.parentElement.children[1].classList.add('authorHovered')
    };
    return (
        <div className={classes.messages}>
            <div className={classes.message +' '+ classes[alignText]}>
                <div className={classes[myCloudColorClass] + ' ' + classes.messageCloud} onMouseOver={messageWasHovered}> {props.message}</div>
                {/* <div className={classes.logo}/> */}
                <div className={classes.author}>{authorName}</div>
            </div>
        </div>
	);
}

export default MessageItem;