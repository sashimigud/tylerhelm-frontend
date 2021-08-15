import React, { useEffect, FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import './retroSwitch.styles.scss';

import { useStore } from '../../../utils/globalStore';

const RetroSwitch: FC = () => {
  const { state, dispatch } = useStore();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (state.retroMode && location.pathname !== '/retro') {
      history.push('retro');
    } else if (!state.retroMode && location.pathname !== '/boring') {
      history.push('boring');
    }
  }, [state.retroMode, history, location]);

  return (
    <div
      className={
        'retro-switch-container ' + (state.retroMode ? 'retro-container' : '')
      }>
      <p>Retro-switch</p>
      <Switch
        checked={state.retroMode}
        onChange={() => dispatch({ type: 'toggleRetro' })}
        name="retro"
        color="primary"
      />
    </div>
  );
};

export default RetroSwitch;
