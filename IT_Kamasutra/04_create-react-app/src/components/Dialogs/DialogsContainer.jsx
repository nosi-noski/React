
import Dialogs from './Dialogs'
import {sendNewMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
// import StoreContext from '../../StoreContext'
import {connect} from 'react-redux'
import { withAuthRedirect } from './../../hoc/WithAuthRedirect'


let mapStateToProps = (state) => { 
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch) => { 
    return {
        addMessage: (body) => { 
            dispatch( sendNewMessageCreator(body) ); 
        },
        changeNewMessage: (body) => {  
            dispatch( updateNewMessageBodyCreator(body) );
        },
        removeMessage:  () => { 
            alert("Remove post")
        }
    };
};


let DialogsRedirectComponent = withAuthRedirect( Dialogs );

//const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );
const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( DialogsRedirectComponent );


// const DialogsContainer = (props) => {
    
// 	return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let addMessage = (body) => {
//                         store.dispatch( sendNewMessageCreator(body))
//                     };
                
//                     let changeMessage = (body) => {
//                         store.dispatch( updateNewMessageBodyCreator(body))
//                     }; 
                
//                     let removeMessage = () => {alert("Remove post")};

//                     return <Dialogs changeNewMessage={changeMessage} 
//                     addMessage={addMessage} 
//                     removeMessage={removeMessage}
//                     dialogsPage={state}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
        
// 	);
// }


export default DialogsContainer;