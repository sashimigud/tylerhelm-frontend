import React, { FC, useEffect, useState } from 'react';
import './about.styles.scss';

import AboutRetroGifs from './aboutRetroGifs/AboutRetroGifs.component';

const About: FC = () => {
  const [isEmailShown, setIsEmailShown] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const email = 'tylerhelm.arthub@gmail.com';
  let timer: null | ReturnType<typeof setTimeout> = null;

  useEffect(() => {
    if (showCopied) {
      setTimer(600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCopied]);

  function setTimer(delay) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShowCopied(false);
      timer = null;
    }, delay);
  }

  function copyEmailToClipboard(email: string): void {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(email);
      setShowCopied(true);
    } else return;
  }

  return (
    <div className="about-container">
      <AboutRetroGifs />
      <div className="about-content-container">
        <div className="about-text-container">
          <h1>Hello world.</h1>
          Welcome to my corner of the internet. <br />
          <br /> Consider this an homage to a time before every inch of the
          internet was analysed and commercialized to the extent seen today.
          <br />
          <br />
          Forget likes or brand deals, people made shit because they enjoyed it.
          Did most of it suck? Absolutely. is it stupid to have a 20mb
          bundle-size of unnecessary gifs? you bet. Sometimes you just want to
          say to hell with SEO, fuck design principles, optimization? - who
          needs it? Look at this stupid shit I made! <br /> - and that's ok.
          <br />
          <br /> If you should want the more sanitized and normal experience
          there is a retro-switch in the right-hand corner, press it and you'll
          be sent to the boring version of this site. <br />
          <br />
          This site is a way of combining things I am passionate about. Namely
          software development, art and blockchain. <br />
          <br />
          For any inquires, tips for improvements, or if you simply want to tell
          me to go fuck myself, DM me{' '}
          <a
            href="http://www.twitter.com/WhosTylerHelm"
            target="_blank"
            rel="noopener noreferrer">
            @WhosTylerHelm
          </a>{' '}
          or send me an email at: <br />
          {isEmailShown ? (
            <div className="email-container">
              <p className="email" onClick={() => copyEmailToClipboard(email)}>
                {email}
              </p>
              {showCopied && <span className="copiedChip">Copied!</span>}
            </div>
          ) : (
            <p
              className="email-block"
              onClick={() => setIsEmailShown(true)}></p>
          )}
          {isEmailShown && window.isSecureContext && (
            <>
              <br />
              <span>(Click to copy to clipboard)</span>
            </>
          )}
        </div>
        <div className="about-gif-container">
          <h3>- Tyler Helm</h3>
          <img className="img-bath" src="/assets/bath-anime.png" alt="" />
          <img className="img-comp" src="/assets/vaporwave_comp.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
