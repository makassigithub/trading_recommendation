/* eslint-disable react/prop-types */
import React from "react";

import SelectBox from "./selectBox";
import SocialMediaControl from "./socialMediaControl";
import { FORM_ACTIONS } from "../utils/actions";

const StockForm = (props) => {
  const { symbols, timeWindows, currentSymbol, useSocialMedia, updateState } =
    props;

  const getAvgSocialMediaCount = () =>
    currentSymbol
      ? currentSymbol.records.reduce(
          (acc, curr) => acc + curr.socialMediaCount,
          0
        ) / currentSymbol.records.length
      : 0;

  return (
    <div style={styles.formWrapper}>
      <SelectBox
        items={symbols}
        updateState={updateState}
        type={FORM_ACTIONS.SET_SYMBOL}
      />
      <SelectBox
        items={timeWindows}
        updateState={updateState}
        type={FORM_ACTIONS.SET_TIME_WINDOW}
      />
      <SocialMediaControl
        useSocialMedia={useSocialMedia}
        countValue={getAvgSocialMediaCount()}
        updateState={updateState}
      />
    </div>
  );
};

const styles = {
  formWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "10px",
    border: "1px solid grey",
  },
};

export default StockForm;
