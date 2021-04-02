import { getAuthUserThunkCreator } from './authReducer'

const SET_INITIALIZE_SUCCESS = "SET-INITIALIZE-SUCCESS";

let initialState =  {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }

        default :
            return state;
    }
};


export const setInitializeSuccess = () => {
    return {
        type: SET_INITIALIZE_SUCCESS
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch( getAuthUserThunkCreator() );

    Promise.all( [promise] )
    .then( () => {dispatch( setInitializeSuccess())} );
};

export default appReducer;