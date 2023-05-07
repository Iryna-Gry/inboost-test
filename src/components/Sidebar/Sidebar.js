import React from "react";
import css from "./Sidebar.module.css";
import { NotesList } from "components";

export const Sidebar = ({ data }) => {
  return (
    <div className={css.Sidebar}>
      {data.length > 0 && <NotesList data={data}></NotesList>}
    </div>
  );
};
