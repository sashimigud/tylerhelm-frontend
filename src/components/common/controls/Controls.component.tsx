import React, { ReactElement } from 'react';
import './controls.styles.scss';
import { BUTTON_DIRECTIONS } from '../../../_constants/buttonSettings';
import ImgBtn from '../carousel/img-carousel-btns/ImgBtn.component';
import { useStore } from '../../../utils/globalStore';

interface ControlsProps {
  slideToPrevItem: () => void;
  slideToNextItem: () => void;
  isRedTape?: boolean;
}

const Controls = ({
  slideToNextItem,
  slideToPrevItem,
  isRedTape,
}: ControlsProps): ReactElement => {
  const { state } = useStore();

  function renderCarouselContros() {
    if (isRedTape) {
      return (
        <div className="controls-container">
          <ImgBtn
            onClick={slideToPrevItem}
            direction={BUTTON_DIRECTIONS.PREVIOUS}
            isRedtape={true}
          />
          <ImgBtn
            onClick={slideToNextItem}
            direction={BUTTON_DIRECTIONS.NEXT}
            isRedtape={true}
          />
        </div>
      );
    }

    if (state.isRetroMode) {
      return (
        <div className="controls-container retro-controls">
          <ImgBtn
            onClick={slideToPrevItem}
            direction={BUTTON_DIRECTIONS.PREVIOUS}
            isRetro={true}
          />
          <ImgBtn
            onClick={slideToNextItem}
            direction={BUTTON_DIRECTIONS.NEXT}
            isRetro={true}
          />
        </div>
      );
    }

    return (
      <div className="controls-container">
        <button onClick={slideToPrevItem}>previous</button>
        <button onClick={slideToNextItem}>next</button>
      </div>
    );
  }

  return <>{renderCarouselContros()}</>;
};

export default Controls;
