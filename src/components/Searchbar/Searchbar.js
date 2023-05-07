import { useState } from "react";
import css from "components/Searchbar/Searchbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

export const Searchbar = ({ onFormSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event) => setKeyword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(keyword.trim());
    setKeyword("");
  };
  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
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

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
