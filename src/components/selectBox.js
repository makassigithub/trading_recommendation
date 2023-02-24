/* eslint-disable react/prop-types */
import React from "react";
import { FORM_ACTIONS } from "../utils/actions";

const SelectBox = ({ items, updateState, type }) => {
  const setSelectedItem = (evt) => {
    updateState({
      type,
      value: evt.target.value,
    });
  };
  return (
    <div style={styles.wrapper}>
      <select onChange={setSelectedItem}>
        {items.map((item) => (
          <option value={item} key={item}>
            {type === FORM_ACTIONS.SET_TIME_WINDOW ? `${item} DAYS` : item}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "5px",
  },
};

export default SelectBox;
