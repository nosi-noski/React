import './App.css';

import Header from "./components/Header/Header"; 
import NavBar from "./components/NavBar/NavBar"; 
import ProfileContainer from "./components/Profile/ProfileContainer"; 
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Params/Params";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";

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
                    <Route path="/profile/:userId?" 
                           render={ () => <ProfileContainer/>}
                    />
                    <Route path="/dialogs" 
                        render={ () => <DialogsContainer/>}
                    />
                    <Route path="/users" 
                        render={ () => <UsersContainer/>}
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
