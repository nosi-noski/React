import { authAPI, profileAPI } from './../api/api';
import { setUserProfile } from './profileReducer'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState =  {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload

            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default :
            return state;
    }

};


export const setIsFetching = ( isFetching ) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setAuthUserDataCreator = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }
};

export const getAuthUserThunkCreator = () => {
    return async (dispatch) => {
        dispatch( setIsFetching(true) );
        
        let response =  await authAPI.authMe();
  
        if ( response.data.resultCode === 0 ){
            let { id, email, login } = response.data.data;
            dispatch( setAuthUserDataCreator(id, email, login, true) );
        }
        dispatch( setIsFetching(false) );
        

       
            // let response  = await profileAPI.getProfile(response.id)

            //     dispatch( setUserProfile(response.data) );


    }
};

export const login = ( email, password, rememberMe, captcha ) => {
    return async ( dispatch ) => {
        
        let response = await authAPI.login( email, password, rememberMe );
        
        if ( response.data.resultCode === 0 ){
            dispatch( getAuthUserThunkCreator() );
        } else {
            let message = ( response.data.messages.length > 0 && response.data.messages[0] ) || "Everything is wrong";
            let action = stopSubmit('login', {_error: message});
            dispatch(action)
        }   
    }
};

export const logout = () => {
    return async ( dispatch ) => {
        let response = await authAPI.logout();
        
        if ( response.data.resultCode === 0 ){
            dispatch( setAuthUserDataCreator( null, null, null, false) );
        }
    }
};



export default authReducer;