import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
