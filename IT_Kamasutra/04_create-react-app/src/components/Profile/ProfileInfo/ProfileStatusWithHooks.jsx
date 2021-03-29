import React, {useState} from 'react';
import { connect } from 'react-redux';
import classes from './ProfileStatus.module.css'



const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode( true );
    }

    let deactivateEditMode = () => {
        setEditMode( false );
        props.setUserStatusThunkCreator(statusText);
    }

    let onStatusChange = (e) => {
        setStatus( e.currentTarget.value );
    }

    // componentDidUpdate(prevProps, prevState){
       
    //     // console.log('componentDidUpdate');
        
    //     if ( this.props.statusText !== prevProps.statusText ){
    //         this.setState({
    //             statusText: this.props.statusText
    //         });
    //     }
    // }

    return (
        <div> Status: 
            { !editMode && 
                <div>
                    <span className={ classes.statusText }
                          onDoubleClick={ activateEditMode } 
                    >   
                        { props.statusText || 'type here your status' } 
                    </span>
                </div>
            }
            { editMode &&
                <div>
                    <input className={ classes.status }
                           autoFocus={true} 
                           type="text"
                           value={statusText}
                           onChange={ onStatusChange }
                           onBlur={ deactivateEditMode } 
                    />
                </div>
            }
        </div>
    )
}




export default  ProfileStatusWithHooks ; 