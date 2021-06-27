import React, { FC } from "react";
import Switch from "@material-ui/core/Switch";
import "./retroSwitch.styles.scss";

import { useStore } from "../../../utils/globalStore";

const RetroSwitch: FC = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="retro-switch-container">
      <p>Retro-switch</p>
      <Switch
        checked={state.retroMode}
        onChange={() => dispatch({ type: "toggleRetro" })}
        name="retro"
        color="primary"
      />
    </div>
  );
};

export default RetroSwitch;
