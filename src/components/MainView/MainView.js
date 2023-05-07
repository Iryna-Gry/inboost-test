import React from "react";
import { Loader, Note } from "components";

export const MainView = ({ isLoading, error, currentNote }) => {
  return (
    <div>
      {isLoading && <Loader />}
      <Note data={currentNote} />
      {error && <p>Something went wrong. Please, refresh the page</p>}
    </div>
  );
};
