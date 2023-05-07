import React from "react";
import css from "./NoteListItem.module.css";
import { parseDate } from "services/parseDate";

export const NoteListItem = ({ data }) => {
  return (
    <li className={css.List_Item}>
      <h2 className={css.Title}>
        {data.values.ddOmoYWO5hWRHUW6VdU8o6.substring(0, 22) + `...`}
      </h2>
      <div>
        <p className={css.Time}>{parseDate(data.updated_at)}</p>
        <p className={css.Text}>
          {data.values.cEWOP2kSnoW6lcS8oBWOOg.substring(0, 10) + `...`}
        </p>
      </div>
    </li>
  );
};
