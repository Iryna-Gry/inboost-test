import React, { useState, useEffect } from "react";
import { fetchAPI } from "services/fetchAPI";
import { Sidebar, MainView } from "components";
import css from "./Home.module.css";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchAPI()
      .then((response) => {
        setNotes([...response]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const getCurrentNote = (id) => notes.find((item) => item.id === id);

  return (
    <div className={css.HomeView}>
      <Sidebar data={notes} />
      <MainView data={getCurrentNote()} isLoading={isLoading} error={error} />
    </div>
  );
};
