import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const RouterContainer = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <div />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default RouterContainer;
