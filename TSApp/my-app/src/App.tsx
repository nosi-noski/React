import React from "react";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./Components/News";
import { HR } from "./Components/HR";
import { Education } from "./Components/Education";
import { Finance } from "./Components/Finance";
import { Main } from "./Components/Main";

export function App() {
  return (
    <div>
      <h3>News</h3>
      <BrowserRouter basename="/domain">
        <Main />
      </BrowserRouter>
      {/*<BrowserRouter basename='/domain'>*/}

      {/*    <Route exact path="/" component={Main} />*/}
      {/*    <Route path="/hr" component={HR} />*/}
      {/*    <Route path="/news" component={News} />*/}
      {/*    <Route path="/edu" component={Education} />*/}
      {/*    <Route path="/fin" component={Finance} />*/}

      {/*</BrowserRouter>*/}
    </div>
  );
}

export default App;
