import React, { Suspense, useState } from "react";
import { Header, Loader, Searchbar, Button } from "components";
import { Outlet } from "react-router-dom";
import { BiPlusMedical, BiTrash, BiEdit } from "react-icons/bi";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
  // const [query, setQuery] = useState("");
  // eslint-disable-next-line
  const [isSelected, setIsSelected] = useState(false);
  // const addNote = () => {};
  // const deleteNote = () => {};
  // const editNote = () => {};

  return (
    <>
      <Header>
        <div className={css.ButtonSet}>
          <Button icon={<BiPlusMedical />} disabled={false} />
          <Button icon={<BiTrash />} disabled={!isSelected} />
          <Button icon={<BiEdit />} disabled={!isSelected} />
        </div>
        <Searchbar />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
