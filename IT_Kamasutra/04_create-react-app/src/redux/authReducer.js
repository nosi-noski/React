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
                ...action.data,
                isAuth: true

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

export const setAuthUserDataCreator = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login
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
                dispatch( setAuthUserDataCreator(id, email, login) );
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



export default authReducer;