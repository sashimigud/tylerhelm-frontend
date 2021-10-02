import React, { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import './retroSwitch.styles.scss';

import { useStore } from '../../../utils/globalStore';

const RetroSwitch: FC = () => {
  const { state, dispatch } = useStore();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (state.isRetroMode === null && location.pathname === '/boring') {
      dispatch({ type: 'setBoring' });
    }

    if (state.isRetroMode === null && location.pathname === '/retro') {
      dispatch({ type: 'setRetro' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleRetro() {
    dispatch({ type: 'toggleRetro' });

    if (location.pathname === '/boring') {
      history.push('retro');
    } else if (location.pathname === '/retro') {
      history.push('boring');
    }
  }

  return (
    <div
      className={
        'retro-switch-container ' + (state.isRetroMode ? 'retro-container' : '')
      }>
      <p>Retro-switch</p>
      {state.isRetroMode !== null ? (
        <Switch
          checked={state.isRetroMode}
          onChange={() => toggleRetro()}
          name="retro"
          color="primary"
        />
      ) : null}
    </div>
  );
};

export default RetroSwitch;
