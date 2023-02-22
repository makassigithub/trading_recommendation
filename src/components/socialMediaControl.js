/* eslint-disable react/prop-types */
import React from "react";
import { FORM_ACTIONS } from "../utils/actions";

const SocialMediaControl = (props) => {
  const { countValue, useSocilaMedia, updateState } = props;

  return (
    <div style={styles.wrapper}>
      <span> Social Media Count :{Math.round(countValue)}</span>
      <label>
        Include in algorithm
        <input
          type="checkbox"
          checked={useSocilaMedia}
          onChange={() =>
            updateState({ type: FORM_ACTIONS.SET_USE_SOCIAL_MEDIA })
          }
        />
      </label>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
};

export default SocialMediaControl;
