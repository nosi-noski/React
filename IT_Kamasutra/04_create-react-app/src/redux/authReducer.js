import { authAPI, profileAPI } from './../api/api';
import { setUserProfile } from './profileReducer'

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
    return (dispatch) => {
        dispatch( setIsFetching(true) );
        
        authAPI.authMe()
        .then(response => {
            
            if ( response.data.resultCode === 0 ){
                let { id, email, login } = response.data.data;
                dispatch( setAuthUserDataCreator(id, email, login, true) );
            }
            dispatch( setIsFetching(false) );
            return response.data.data;

        })
        .then( response => {
            
            profileAPI.getProfile(response.id)
            .then(response => {
                dispatch( setUserProfile(response.data) );
            });

        });
    }
};

export const login = ( email, password, rememberMe, captcha ) => {
    return ( dispatch ) => {
        authAPI.login( email, password, rememberMe )
        .then( (response) => {
            debugger
            if ( response.data.resultCode === 0 ){
                let { id, email, login } = response.data.data;
               
                dispatch( getAuthUserThunkCreator() );
            }   
            return response.data.data;
        })
    }
};

export const logout = () => {
    return ( dispatch ) => {
        authAPI.logout( )
        .then( response => {
            if ( response.data.resultCode === 0 ){
                dispatch( setAuthUserDataCreator( null, null, null, false) );
            }
        })
    }
};



export default authReducer;