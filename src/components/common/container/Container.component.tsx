import React, { FC } from 'react';
import './container.styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../../retro/home/Home.component';
import BoringHome from '../../boring/home/BoringHome.component';

const Container: FC = () => {
  return (
    <div className="container-container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/retro" />
          </Route>
          <Route path="/retro">
            <Home />
          </Route>
          <Route path="/boring">
            <BoringHome />
          </Route>
          <Route path="*">
            <Redirect to="/retro" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Container;
