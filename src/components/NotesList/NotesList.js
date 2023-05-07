import React from "react";
import { NoteListItem } from "components";
import css from "./NotesList.module.css";

export const NotesList = ({ data }) => {
  return (
    <ul className={css.List}>
      {data.map((item) => (
        <NoteListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
