import { useState } from "react";
import css from "components/Searchbar/Searchbar.module.css";

export const Searchbar = ({ onChange }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event) => setKeyword(event.target.value);
  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
          placeholder="🔍 Search"
          value={keyword}
        />
      </form>
    </div>
  );
};
