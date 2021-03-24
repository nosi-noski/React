import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {setIsFetching, setAuthUserDataCreator} from './../../redux/authReducer';
import {connect} from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer'
import {getAuthUserThunkCreator, logout} from './../../redux/authReducer'
import { authAPI, profileAPI } from './../../api/api'
class HeaderContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render (){
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => {
    
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setAuthUser: (userId, email, login) => {
//             dispatch( setAuthUserDataCreator(userId, email, login) );
//         },
//         loadUserProfile: (userId) => {
//             dispatch( setUserProfile(userId) );
//         }
//     }
// }
export default connect(mapStateToProps, {logout} )(HeaderContainer);