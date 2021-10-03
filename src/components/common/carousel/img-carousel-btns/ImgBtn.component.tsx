import React, { FC } from 'react';
import './imgBtn.styles.scss';

import { BUTTON_DIRECTIONS } from '../../../../_constants/buttonSettings';

interface IRetroBtnProps {
  direction: BUTTON_DIRECTIONS;
  onClick: () => void;
  isRetro?: boolean;
  isRedtape?: boolean;
}

const ImgBtn: FC<IRetroBtnProps> = ({
  direction,
  onClick,
  isRetro,
  isRedtape,
}: IRetroBtnProps) => {
  function getImgSource(direction: BUTTON_DIRECTIONS) {
    if (isRedtape) {
      return direction === BUTTON_DIRECTIONS.NEXT
        ? '/assets/nextgirl.png'
        : '/assets/prevgirl.png';
    }

    if (isRetro) {
      return direction === BUTTON_DIRECTIONS.NEXT
        ? '/assets/next.gif'
        : '/assets/back.gif';
    }
  }

  return (
    <div className="retrobtn-container" onClick={onClick}>
      {direction === BUTTON_DIRECTIONS.NEXT ? (
        <img
          className="next"
          src={getImgSource(BUTTON_DIRECTIONS.NEXT)}
          alt="next"
          title="next"
        />
      ) : (
        <img
          className="previous"
          src={getImgSource(BUTTON_DIRECTIONS.PREVIOUS)}
          alt="previous"
          title="previous"
        />
      )}
    </div>
  );
};

export default ImgBtn;
