import React from "react";
import sprite from "images/sprite.svg";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={css.Nothing_Container}>
      <svg className={css.NothingSVG}>
        <use href={sprite + "#nothing-here-space"}></use>
      </svg>
      <p className={css.Nothing_Text}>There is nothing here!</p>
    </div>
  );
};
