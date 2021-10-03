import React, { FC } from 'react';
import './retroContent.styles.scss';

const RetroContent: FC = () => {
  return (
    <div className="retro-content-container">
      <img className="retro-img r-img-1" src="/assets/cat.gif" alt="" />
      <img className="retro-img r-img-2" src="/assets/lame.gif" alt="" />
      <img className="retro-img r-img-3" src="/assets/pyramide.gif" alt="" />
      <img className="retro-img r-img-4" src="/assets/smiley.gif" alt="" />
      <img className="retro-img r-img-5" src="/assets/lips.png" alt="" />
      <img className="retro-img r-img-6" src="/assets/ksigns.gif" alt="" />
    </div>
  );
};

export default RetroContent;
