import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {setIsFetching, setAuthUserDataCreator} from './../../redux/authReducer';
import {connect} from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer'
class HeaderContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setIsFetching(true);
        
        let auth = `https://social-network.samuraijs.com/api/1.0/auth/me`;
        axios.get( auth, {withCredentials: true } )
        .then(response => {
            if ( response.data.resultCode === 0 ){
                
                let { id, email, login } = response.data.data;
                this.props.setAuthUser( id, email, login )
            }

            setIsFetching(false);
            return response.data.data;
        }).then( response => {
            let users = "https://social-network.samuraijs.com/api/1.0/profile/" + response.id;
            axios.get(users).then(response => {
                this.props.loadUserProfile( response.data );
            });
           
        });
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

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUser: (userId, email, login) => {
            dispatch( setAuthUserDataCreator(userId, email, login) );
        },
        loadUserProfile: (userId) => {
            dispatch( setUserProfile(userId) );
        }
      
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);