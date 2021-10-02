import React, { FC } from 'react';
import './home.styles.scss';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import { useStore } from '../../../utils/globalStore';

import Menu from 'react-burger-menu/lib/menus/slide';
import Header from '../header/Header.component';
import Content from '../home/content/Content.component';
import RetroSwitch from '../../common/retro-switch/RetroSwitch.component';
import About from '../../retro/about/About.component';
import Nfts from '../../retro/nfts/Nfts.component';

const Home: FC = () => {
  const { state, dispatch } = useStore();
  const { path } = useRouteMatch();

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
        <div className="cooltext ct-home"></div>
        <div className="cooltext ct-about"></div>
        <div className="cooltext ct-redtape"></div>
        <div className="gif-girls"></div>
      </Menu>
      <main id="page-wrap">
        <Header />
        <div className="content-outer-container">
          <Switch>
            <Route exact path={`${path}/${HEADER_NAV.ABOUT}`}>
              <About />
            </Route>
            <Route exact path={`${path}/${HEADER_NAV.NFTS}`}>
              <Nfts />
            </Route>
            <Route exact path="">
              <Content />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Home;
