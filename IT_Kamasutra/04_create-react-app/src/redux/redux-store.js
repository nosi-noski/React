import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './userReducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

export default store;
window.store = store;