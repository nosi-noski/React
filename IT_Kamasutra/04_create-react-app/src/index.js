import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
	posts : [
		{id: 1, likescount: 1, post: 'Hi, how are you?'},
		{id: 2, likescount: 11, post: 'It\'s my first post'}
	],
	dialogs : [
		{id: 1, name: 'Ivan'},
		{id: 2, name: 'Sergey'},
		{id: 3, name: 'Stas'},
		{id: 4, name: 'Nataliya'}
	],
	messages : [
		{id: 1, userid: 1, message: 'Hi'},
		{id: 2, userid: 1, message: 'How are you?'},
		{id: 3, userid: 2, message: 'Have you ever coded in React?'},
		{id: 4, userid: 3, message: 'I have special offer for you)) Text me back, please)'},
	]
};


ReactDOM.render(
	<React.StrictMode>
		<App data={data}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
