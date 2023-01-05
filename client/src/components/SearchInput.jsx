import React from "react";
import { useGlobalContext } from "../App";

function SearchInput() {
  const { query, handleQueryChange } = useGlobalContext();
  return (
    <input
      type="search"
      value={query}
      onChange={handleQueryChange}
      placeholder="search for task..."
      className="search-input"
    />
  );
}

export default SearchInput;
