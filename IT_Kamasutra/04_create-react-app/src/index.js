import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}; 

renderEntireTree(); 
// store.subscribe( () => {
//     let state = store.getState() 
//     renderEntireTree( state );
// } );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
