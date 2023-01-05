import React from "react";
import { useGlobalContext } from "../App";

function SearchArea() {
  const { query, handleQueryChange } = useGlobalContext();
  return (
    <div className="search-area">
      <input
        type="search"
        value={query}
        onChange={handleQueryChange}
        placeholder="search for task..."
        className="search-input"
      />
      <label htmlFor="text">Search</label>
    </div>
  );
}

export default SearchArea;
