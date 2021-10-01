import React, { FC } from 'react';
import './container.styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import Home from '../../retro/home/Home.component';
import BoringHome from '../../boring/home/BoringHome.component';
import About from '../../retro/about/About.component';
import Nfts from '../../retro/nfts/Nfts.component';

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
          <Route path={`/retro/${HEADER_NAV.ABOUT}`}>
            <About />
          </Route>
          <Route path={`/retro/${HEADER_NAV.NFTS}`}>
            <Nfts />
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
