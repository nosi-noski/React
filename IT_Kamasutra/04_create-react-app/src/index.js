import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './redux/state'
import {BrowserRouter, Route} from "react-router-dom";
import state from './redux/state'
import reportWebVitals from './reportWebVitals';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireTree(state); 
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
