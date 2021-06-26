import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { StoreProvider } from './utils/globalStore';
import Home from './components/retro/home/Home.component';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/boring">
            
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
