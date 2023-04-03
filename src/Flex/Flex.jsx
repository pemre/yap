import React from "react";
import styles from "./Flex.module.css";

export const Flex = (props) => {
  return <div className={styles.flex}>{props.children}</div>;
};
