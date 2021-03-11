import React from 'react';
import { connect } from 'react-redux';
import classes from './ProfileStatus.module.css'



class ProfileStatus extends React.Component {

    //refStatusText = React.createRef();
    state = {
        editMode: false,
        statusText: this.props.statusText
    }


    componentDidMount (){
           
    }

    componentDidUpdate(prevProps, prevState){
       
        console.log('componentDidUpdate');
        debugger
        if ( this.props.statusText !== prevProps.statusText ){
            this.setState({
                statusText: this.props.statusText
            });
        }
    }


    activateEditMode = () => {
        this.setState( {editMode: true} );
        this.state.editMode = true;  
    }


    deactivateEditMode = () => {
        this.setState( {editMode: false} );
        this.state.editMode = false; 
        this.props.setUserStatusThunkCreator(this.state.statusText);
    }


    onStatusChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }


    render(){
        console.log('render');

        // this.props.statusText === глобальный state
        // this.state.statusText === локальный state
        return (
            <div> Status: 
                { !this.state.editMode && 
                    <div>
                        <span className={classes.statusText} 
                              onDoubleClick={ this.activateEditMode.bind(this) }
                        >   
                            {this.props.statusText || 'type here your status'} 
                        </span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input className={classes.status} 
                               autoFocus={true} 
                               onBlur={ this.deactivateEditMode.bind(this) } 
                               type="text" 
                               value={this.state.statusText}
                               onChange={  this.onStatusChange  }
                               //refStatusText={this.statusTextInputRef}
                        />
                    </div>
                }
            </div>
        )
    }
}


let mapStateToProps = (state) => (
{
    statusText: state.profilePage.statusText,
    profile: state.profilePage.profile
});


export default  connect(mapStateToProps, {} )(ProfileStatus) ; ; 