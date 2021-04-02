import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App';

it('renders AppContainer', () => {
    let div = document.createElement('div');
    ReactDOM.render(<AppContainer/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
