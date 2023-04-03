import React from "react";
import * as styles from "./Header.module.css";

export const Header = (props) => {
  return <div className={styles.header}>{props.children}</div>;
};
