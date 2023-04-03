import React from "react";
import * as styles from "./Switch.module.css";

export const Switch = ({ checked, onClick }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked ? "checked" : ""}
        onClick={() => onClick()}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
