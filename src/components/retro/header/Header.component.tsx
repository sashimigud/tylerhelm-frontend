import React, { FC } from 'react';
import './header.styles.scss';

import { HEADER_NAV } from '../../../_constants/headerNavigation';

import { useHistory } from 'react-router-dom';

type HeaderProps = {
  toggleFlyout: () => void;
};

const Header: FC<HeaderProps> = ({ toggleFlyout }: HeaderProps) => {
  const history = useHistory();

  function navigate(navigateTo: string): void {
    console.log('navigate to: ', navigateTo);
    //history.push(navigateTo);
    history.replace('retro/about');
  }

  return (
    <div className="header-container">
      <div className="site-controls">
        <img className="logo" src="assets/datamaskin.gif" alt="" />
        <div>
          <div
            className="header-link h-l-home"
            onClick={() => navigate('retro')}></div>
          <div
            className="header-link h-l-about"
            onClick={() => navigate(`${HEADER_NAV.ABOUT}`)}></div>
          <div
            className="header-link h-l-nfts"
            onClick={() => navigate(`/${HEADER_NAV.NFTS}`)}></div>
        </div>
      </div>
      <img
        className="burger-menu"
        src="assets/vaporwave_cat.gif"
        alt=""
        onClick={() => toggleFlyout()}
      />
    </div>
  );
};

export default Header;
