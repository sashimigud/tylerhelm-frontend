import React, { FC } from 'react';
import './header.styles.scss';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../../utils/globalStore';

const Header: FC = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { dispatch } = useStore();

  function navigate(navigateTo: string): void {
    history.push(navigateTo);
  }

  return (
    <div className="header-container">
      <div className="site-controls">
        <img
          onClick={() => navigate('')}
          className="logo"
          src="/assets/datamaskin.gif"
          alt=""
        />
        <div>
          <div
            className="header-link h-l-home"
            onClick={() => navigate('')}></div>
          <div
            className="header-link h-l-about"
            onClick={() => navigate(`${path}/${HEADER_NAV.ABOUT}`)}></div>
          <div
            className="header-link h-l-nfts"
            onClick={() => navigate(`${path}/${HEADER_NAV.NFTS}`)}></div>
        </div>
      </div>
      <img
        className="burger-menu"
        src="/assets/vaporwave_cat.gif"
        alt=""
        onClick={() => dispatch({ type: 'toggleShowFlyout' })}
      />
    </div>
  );
};

export default Header;
