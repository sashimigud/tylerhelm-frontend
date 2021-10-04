import React, { FC } from 'react';
import './boringbtn.styles.scss';
import { BUTTON_DIRECTIONS } from '../../../../_constants/buttonSettings';

interface IBoringCarouselBtnProps {
  direction: BUTTON_DIRECTIONS;
  onClick: () => void;
}

const BoringCarouselBtn: FC<IBoringCarouselBtnProps> = ({
  direction,
  onClick,
}: IBoringCarouselBtnProps) => {
  return (
    <div className="boring-btn" onClick={onClick}>
      {direction === BUTTON_DIRECTIONS.NEXT ? 'Next' : 'Prev'}
    </div>
  );
};

export default BoringCarouselBtn;
