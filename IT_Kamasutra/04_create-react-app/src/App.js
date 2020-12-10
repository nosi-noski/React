import './App.css';

import Header from "./components/Header/Header"; 
import NavBar from "./components/NavBar/NavBar"; 
import Profile from "./components/Profile/Profile"; 
import Dialogs from "./components/Dialogs/Dialogs";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Params/Params";
import News from "./components/News/News";

import {BrowserRouter, Route} from "react-router-dom";


 
function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route exact path="/dialogs" component={Dialogs}/>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/news" component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
