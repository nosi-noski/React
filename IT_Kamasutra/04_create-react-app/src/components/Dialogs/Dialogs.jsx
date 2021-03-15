import React, { useState, useEffect }  from 'react';
import classes from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { TextArea } from './../../components/Common/FormControls/FormControls'
import { required, maxLengthThunkCreator } from './../../utils/validators/validators'

const maxLength140 = maxLengthThunkCreator(140);

const Dialogs = (props) => {s
    
    let state = props.dialogsPage;
     
    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} dialogId={d.id} key={d.id}/>);
    let messagesElements = state.messages.map( (m, i, arr) => {
    
    let order= {
        samePrevUserId: i > 0 && m.userid === arr[i-1].userid ? true : false,
        sameNextUserId: i < arr.length-1 && m.userid === arr[i+1].userid ? true : false
    } 
   
    return <MessageItem props={props} order={order} message={m.message} userid={m.userid} key={m.id}/>
    } );
    

    let AddNewMessage = (values) => {
        props.addMessage(values.newMessageText);  
    }

    let messagesElement = React.createRef();
 
    
    useEffect(() => {
        if ( props.isAuth === true ) {
            messagesElement.current.scrollTo(0, messagesElement.current.scrollHeight);
        }
    });

    if ( props.isAuth === false ) {
        return <Redirect to={"/login"} />
    }

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
                <AddMessageReduxForm onSubmit={AddNewMessage}/>
            </div>
            
		</div>
	);
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            
                <div className={classes.newTextArea}>
                    <Field component={TextArea} 
                           validate={[required, maxLength140]}
                           name="newMessageText" 
                           placeholder="New message"/>
                </div>

                <div className={classes.buttons}>
                    <div className={classes.textAdd}>
                        <button>Add message</button>
                    </div> 
                    <div className={classes.textRemove}>
                        <button>Remove message</button> 
                    </div> 
                </div>
       
        </form>
    )
};

const AddMessageReduxForm = reduxForm({form: "AddMessageForm"})(AddMessageForm)
export default Dialogs;