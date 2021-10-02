import React, { ReactElement } from 'react';
import './controls.styles.scss';
import { BUTTON_DIRECTIONS } from '../../../_constants/buttonSettings';
import RetroBtn from '../carousel/retro-carousel-btns/RetroBtn.component';
import { useStore } from '../../../utils/globalStore';

interface ControlsProps {
  slideToPrevItem: () => void;
  slideToNextItem: () => void;
}

const Controls = ({
  slideToNextItem,
  slideToPrevItem,
}: ControlsProps): ReactElement => {
  const { state } = useStore();

  return (
    <div
      className={
        'controls-container ' + (state.isRetroMode ? 'retro-controls' : '')
      }>
      {state.isRetroMode ? (
        <RetroBtn
          onClick={slideToPrevItem}
          direction={BUTTON_DIRECTIONS.PREVIOUS}
        />
      ) : (
        <button onClick={slideToPrevItem}>normal back</button>
      )}
      {state.isRetroMode ? (
        <RetroBtn
          onClick={slideToNextItem}
          direction={BUTTON_DIRECTIONS.NEXT}
        />
      ) : (
        <button onClick={slideToNextItem}>normal next</button>
      )}
    </div>
  );
};

export default Controls;
