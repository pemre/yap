import React from "react";
import * as styles from "./Button.module.css";

export const Button = ({
  // Types
  success,
  danger,
  // Sizes
  sizeS,
  sizeM,
  sizeL,
  // Other
  onClick,
  children
}) => {
  const successClass = success ? styles.success : "";
  const dangerClass = danger ? styles.danger : "";

  const sizeMClass = sizeM ? styles.sizeM : "";
  const sizeLClass = sizeL ? styles.sizeL : "";

  return (
    <div
      className={`
      ${styles.button}
      ${successClass}
      ${dangerClass}
      ${sizeMClass}
      ${sizeLClass}
    `}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};
