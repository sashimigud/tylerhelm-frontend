import React, { FC } from 'react';
import './retrobtn.styles.scss';

import { BUTTON_DIRECTIONS } from '../../../../_constants/buttonSettings';

interface IRetroBtnProps {
  direction: BUTTON_DIRECTIONS;
  onClick: () => void;
}

const RetroBtn: FC<IRetroBtnProps> = ({
  direction,
  onClick,
}: IRetroBtnProps) => {
  return (
    <div className="retrobtn-container" onClick={onClick}>
      {direction === BUTTON_DIRECTIONS.NEXT ? (
        <img className="next" src="/assets/next.gif" alt="next" />
      ) : (
        <img className="previous" src="/assets/back.gif" alt="previous" />
      )}
    </div>
  );
};

export default RetroBtn;
