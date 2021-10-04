import React from 'react';
import './boringhome.styles.scss';

import Menu from 'react-burger-menu/lib/menus/slide';
import { useHistory, useRouteMatch, Route, Switch } from 'react-router-dom';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import { useStore } from '../../../utils/globalStore';

import RetroSwitch from '../../common/retro-switch/RetroSwitch.component';
import BoringHeader from '../header/BoringHeader.component';
import BoringHomeContent from './HomeContent/BoringHomeContent.component';
import BoringAbout from '../about/BoringAbout.component';
import Nfts from '../../common/nfts/Nfts.component';
import RedTape from '../../common/red-tape/RedTape.component';

const BoringHome = () => {
  const { state, dispatch } = useStore();
  const { path } = useRouteMatch();
  const history = useHistory();

  return (
    <div id="boring-home-container">
      <RetroSwitch />
      <Menu
        customBurgerIcon={false}
        isOpen={state.isFlyoutOpen}
        onClose={() => dispatch({ type: 'toggleShowFlyout' })}
        right
        pageWrapId={'page-wrap'}
        outerContainerId={'boring-home-container'}>
        <h1 className="menu-links" onClick={() => history.push('/boring')}>
          Home
        </h1>
        <h1
          className="menu-links"
          onClick={() => history.push(`/boring/${HEADER_NAV.ABOUT}`)}>
          About
        </h1>
        <h1
          className="menu-links"
          onClick={() => history.push(`/boring/${HEADER_NAV.NFTS}`)}>
          NFTs
        </h1>
        <div className="cooltext ct-redtape"></div>
        <div
          className="gif-girls"
          onClick={() => history.push(`/boring/${HEADER_NAV.REDTAPE}`)}></div>
      </Menu>
      <main id="page-wrap">
        <BoringHeader />
        <div className="boring-home-outer-container">
          <Switch>
            <Route exact path={`${path}/${HEADER_NAV.ABOUT}`}>
              <BoringAbout />
            </Route>
            <Route exact path={`${path}/${HEADER_NAV.NFTS}`}>
              <Nfts />
            </Route>
            <Route exact path={`${path}/${HEADER_NAV.REDTAPE}`}>
              <RedTape />
            </Route>
            <Route path="">
              <BoringHomeContent />
            </Route>
            <Route path="*">
              <BoringHomeContent />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default BoringHome;
