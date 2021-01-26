import React from 'react';
import classes from'./MessageItem.module.css';
import {getAuthorName} from '../../../redux/store'

const MessageItem = (props) => {
    

    
    let myId = 0;
    let myCloudColorClass = props.userid === myId ? "blueCloud" : "greenCloud";
    let alignText =  props.userid === myId ? 'messageAlignLeft': 'messageAlignRight';
    let hiddenAuthor = props.order.sameNextUserId ? 'hiddenAuthor' : '';
    let radiusBottomNone = props.order.sameNextUserId ? 'radiusBottomNone' : '';
    let radiusTopRightNone = props.order.samePrevUserId ? 'radiusTopRightNone' : '';
    let authorName =  getAuthorName( props.userid, props.props.dialogsPage.dialogs );
    console.log(hiddenAuthor,radiusBottomNone, props.message)
    let messageWasHovered = (e) => {
        
        e.currentTarget.parentElement.children[1].classList.add('authorHovered')
    };
    return (
        <div className={classes.messages}>
            <div className={classes.message +' '+ classes[alignText]}>
                <div className={ classes[myCloudColorClass] + ' ' + 
                                 classes.messageCloud + ' ' + 
                                 classes[radiusBottomNone] + ' ' + 
                                 classes[radiusTopRightNone]
                                 } onMouseOver={messageWasHovered}> {props.message}</div>
                <div className={ classes.author + ' ' + 
                                 classes[hiddenAuthor]  }>{authorName}</div>
            </div>
        </div>
	);
}

export default MessageItem;