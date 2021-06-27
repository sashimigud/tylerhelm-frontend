import React, { FC } from 'react';
import './container.styles.scss';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '../../retro/home/Home.component';
import RetroSwitch from '../retro-switch/RetroSwitch.component';

const Container: FC = () => {
  return (
    <div className="container-container">
      <RetroSwitch />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/retro" />
          </Route>
          <Route path="/retro">
            <Home />
          </Route>
          <Route path="/boring">
            {/* TODO: boring app */}
            <p>hello boring company</p>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Container;