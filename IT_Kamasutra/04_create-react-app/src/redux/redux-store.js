import {createStore, combineReducers, applyMiddleware ,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './userReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    /* preloadedState, */ 
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);

//let store = createStore( reducers, applyMiddleware(thunkMiddleware) );

export default store;
window.store = store;