import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from 'components/MainPage';

const gavno = () => <div>sdfhsdkjfh</div>;

const RouterContainer = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route component={gavno} /> */}
      <Route to="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default RouterContainer;
