import React from 'react';
import './boringhome.styles.scss';

import RetroSwitch from '../../common/retro-switch/RetroSwitch.component';
import BoringHomeContent from './HomeContent/BoringHomeContent.component';

const BoringHome = () => {
  return (
    <div className="boring-home-container">
      <RetroSwitch />

      <div className="boring-home-content-container">
        <BoringHomeContent />
      </div>
    </div>
  );
};

export default BoringHome;
