import React, { FC } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import PersistentDrawerLeft from "./Components/PersistentDrawerLeft";
import { routes } from "./InitialData/MicroserviceConfigs";

const App: FC = () => {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft routes={routes} />
      {routes.map((route) => {
        return (
          <Route exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        );
      })}
    </BrowserRouter>
  );
};

export default App;
