import React, { FC } from 'react';
import './aboutRetroGifs.styles.scss';

const AboutRetroGifs: FC = () => {
  return (
    <div className="about-retro-gifs-container">
      <img
        className="about-retro-gif arg-img-1"
        src="/assets/bullshit.gif"
        alt=""
      />
      <img
        className="about-retro-gif arg-img-2"
        src="/assets/mouth.png"
        alt=""
      />
      <img
        className="about-retro-gif arg-img-3"
        src="/assets/butterfly-anime.gif"
        alt=""
      />
    </div>
  );
};

export default AboutRetroGifs;
