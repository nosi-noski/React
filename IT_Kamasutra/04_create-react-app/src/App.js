import './App.css';

import Header from "./components/Header/Header"; 
import NavBar from "./components/NavBar/NavBar"; 
import Profile from "./components/Profile/Profile"; 
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Params/Params";
import News from "./components/News/News";

import {BrowserRouter, Route} from "react-router-dom";

let getMessages = () => <Messages/> 
 
function App ( props ) {
    
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {/* <Route path="/profile" component={Profile}/> */}
                    {/* <Route path="/dialogs" component={Dialogs} /> */}
                    <Route path="/profile" 
                           render={ () => <Profile store={props.store} />}
                    />
                    <Route path="/dialogs" 
                        render={ () => <DialogsContainer store={props.store} />}
                    />
                    <Route path="/messages" component={getMessages} />
                    <Route path="/music"    component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/news"     component={News} />
                </div>
            </div>
      
    );
}

export default App;
