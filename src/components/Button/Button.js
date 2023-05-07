import React from "react";
import css from "./Button.module.css";

export const Button = ({ icon, disabled }) => {
  return (
    <button className={css.Button} disabled={disabled}>
      {icon}
    </button>
  );
};
