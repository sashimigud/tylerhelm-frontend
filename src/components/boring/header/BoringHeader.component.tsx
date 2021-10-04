import React, { FC } from 'react';
import './boringheader.styles.scss';

import { useRouteMatch, useHistory } from 'react-router-dom';

import { HEADER_NAV } from '../../../_constants/headerNavigation';
import { useStore } from '../../../utils/globalStore';

const BoringHeader: FC = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { dispatch } = useStore();

  function navigate(navigateTo: string): void {
    history.push(navigateTo);
  }

  return (
    <div className="b-header-container">
      <div className="site-controls">
        <div className="logo" onClick={() => navigate('/boring')}>
          <span>T</span>H
        </div>
        <div className="links" onClick={() => navigate('/boring')}>
          Home
        </div>
        <div
          className="links"
          onClick={() => navigate(`${path}/${HEADER_NAV.ABOUT}`)}>
          About
        </div>
        <div
          className="links"
          onClick={() => navigate(`${path}/${HEADER_NAV.NFTS}`)}>
          NFTs
        </div>
      </div>
      <div
        className="burger-container"
        onClick={() => dispatch({ type: 'toggleShowFlyout' })}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </div>
  );
};

export default BoringHeader;
