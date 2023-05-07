import React, { useState, useEffect } from "react";
import { fetchAPI } from "services/fetchAPI";
import { Loader, NotesList } from "components";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchAPI()
      .then((response) => {
        setNotes([...response.results]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {notes.length > 0 && <NotesList data={notes}></NotesList>}
      {error && <p>Something went wrong. Please, refresh the page</p>}
    </div>
  );
};
