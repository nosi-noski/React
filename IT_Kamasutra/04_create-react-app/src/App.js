import './App.css';
import React, { Suspense } from 'react';
import {compose} from 'redux';
import {connect } from 'react-redux'
import {HashRouter, BrowserRouter, Route, withRouter} from "react-router-dom";

import { initializeApp } from './redux/appReducer'

import Loader from './components/Common/Loader/Loader';
import store from './redux/redux-store'
import {Provider} from 'react-redux'

import HeaderContainer from "./components/Header/HeaderContainer"; 
import NavBar from "./components/NavBar/NavBar"; 
import LoginPage from './components/Login/Login'
//import ProfileContainer from "./components/Profile/ProfileContainer"; 
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Params/Params";

import {WithSuspense} from './hoc/WithSuspense'

const DialogsContainer = React.lazy( () => import("./components/Dialogs/DialogsContainer") );
const ProfileContainer = React.lazy( () => import("./components/Profile/ProfileContainer") );


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
                           render={WithSuspense(ProfileContainer)}
                    />
                    <Route path="/dialogs" 
                        render={ () => <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer/></React.Suspense> }
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


const AppContainer = () => {
    console.log('process.env.PUBLIC_URL', process.env)
    return (
        
        <HashRouter>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
            <Provider store={store}>
                <AppComposed/>
            </Provider>
        {/* </BrowserRouter> */}
        </HashRouter>
    )
}

export default AppContainer; 
