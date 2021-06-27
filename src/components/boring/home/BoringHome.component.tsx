import React from 'react';
import './boringhome.styles.scss';

import RetroSwitch from '../../common/retro-switch/RetroSwitch.component';

const BoringHome = () => {
  return (
    <div className="boring-home-container">
      <RetroSwitch />
      <p>hello boring company</p>
    </div>
  )
}

export default BoringHome;