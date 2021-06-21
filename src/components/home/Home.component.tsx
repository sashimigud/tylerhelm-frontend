import React, { useState, FC } from 'react';
import './home.styles.scss'

import { useStore } from '../../utils/globalStore';

import Menu from 'react-burger-menu/lib/menus/slide';
import Header from '../header/Header.component';
import Content from '../home/content/Content.component';

const Home: FC = () => {
  const [showFlyout, setShowFlyout] = useState<boolean>(false);
  const { state } = useStore();
  //const [apiData, setApiData] = useState();

  function onShowFlyout(): void {
    setShowFlyout(!showFlyout);
  }

  /*useEffect(() => {
    async function fetchImages() {
      const response = await fetch('http://localhost:6349/api/images')
      const body = await response.json()

      setApiData(body)
      console.log(body)
    }

    fetchImages();
  }, []);*/

  return <div id="home-container">
    <Menu 
    customBurgerIcon={false}
    isOpen={showFlyout}
    onClose={() => setShowFlyout(false)}
    right 
    pageWrapId={"page-wrap"} 
    outerContainerId={"home-container"}>
        <div className="cooltext ct-home"></div>
        <div className="cooltext ct-about"></div>
        <div className="cooltext ct-redtape"></div>
        <div className="gif-girls"></div>
    </Menu>
    <main id="page-wrap">
      <Header toggleFlyout={onShowFlyout} />
      <div className="content-outer-container">
        <Content />
      </div>
    </main>
  </div>
}

export default Home;