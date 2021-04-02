import './App.css';
import React from 'react';
import {compose} from 'redux';
import {connect } from 'react-redux'
import {BrowserRouter, Route, withRouter} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer"; 
import NavBar from "./components/NavBar/NavBar"; 
import ProfileContainer from "./components/Profile/ProfileContainer"; 
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Params/Params";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from './components/Login/Login'
import { initializeApp } from './redux/appReducer'

import Loader from './components/Common/Loader/Loader';
import store from './redux/redux-store'
import {Provider} from 'react-redux'

let getMessages = () => <Messages/> 
 
class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp();
    }

    render (){
        
        if( !this.props.initialized ){
            return <Loader/>;
        }
       
        return ( 
           <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {/* <Route path="/profile" component={Profile}/> */}
                    {/* <Route path="/dialogs" component={Dialogs} /> */}
                    <Route path="/profile/:userId?" 
                           render={ () => <ProfileContainer/> }
                    />
                    <Route path="/dialogs" 
                        render={ () => <DialogsContainer/> }
                    />
                    <Route path="/users" 
                        render={ () => <UsersContainer/> }
                    />
                    <Route path="/login"
                         render={ () => <LoginPage/> }
                    />
                    <Route path="/messages" component={getMessages} />
                    <Route path="/music"    component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/news"     component={News} />
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppComposed = compose(
    connect( mapStateToProps, { initializeApp} ),
    withRouter
)(App);


const AppContainer = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppComposed/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppContainer; 
