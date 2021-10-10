import React, { FC } from 'react';
import './home.styles.scss';

import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import { useStore } from '../../../utils/globalStore';

import Menu from 'react-burger-menu/lib/menus/slide';
import Header from '../header/Header.component';
import Content from '../home/content/Content.component';
import RetroSwitch from '../../common/retro-switch/RetroSwitch.component';
import About from '../../retro/about/About.component';
import RetroNfts from '../retroNfts/RetroNft.component';
import RedTape from '../../common/red-tape/RedTape.component';

const Home: FC = () => {
  const { state, dispatch } = useStore();
  const { path } = useRouteMatch();
  const history = useHistory();

  //const [apiData, setApiData] = useState();

  /*useEffect(() => {
    async function fetchImages() {
      const response = await fetch('http://localhost:6349/api/images')
      const body = await response.json()

      setApiData(body)
      console.log(body)
    }

    fetchImages();
  }, []);*/

  return (
    <div id="home-container">
      <RetroSwitch />
      <Menu
        customBurgerIcon={false}
        isOpen={state.isFlyoutOpen}
        onClose={() => dispatch({ type: 'toggleShowFlyout' })}
        right
        pageWrapId={'page-wrap'}
        outerContainerId={'home-container'}>
        <div
          className="cooltext ct-home"
          onClick={() => history.push('/retro')}></div>
        <div
          className="cooltext ct-about"
          onClick={() => history.push(`/retro/${HEADER_NAV.ABOUT}`)}></div>
        <div
          className="cooltext ct-nfts"
          onClick={() => history.push(`/retro/${HEADER_NAV.NFTS}`)}></div>
        <div
          className="cooltext ct-redtape"
          onClick={() => alert("There's nothing here")}></div>
        <div
          className="gif-girls"
          onClick={() => history.push(`/retro/${HEADER_NAV.REDTAPE}`)}></div>
      </Menu>
      <main id="page-wrap">
        <Header />
        <div className="content-outer-container">
          <Switch>
            <Route exact path={`${path}/${HEADER_NAV.ABOUT}`}>
              <About />
            </Route>
            <Route exact path={`${path}/${HEADER_NAV.NFTS}`}>
              <RetroNfts />
            </Route>
            <Route exact path={`${path}/${HEADER_NAV.REDTAPE}`}>
              <RedTape />
            </Route>
            <Route path="">
              <Content />
            </Route>
            <Route path="*">
              <Content />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Home;
