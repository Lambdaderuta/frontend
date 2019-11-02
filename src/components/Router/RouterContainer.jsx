import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div>Ты пидор</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouterContainer;
