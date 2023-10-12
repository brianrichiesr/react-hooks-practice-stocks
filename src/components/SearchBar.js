import React from "react";

function SearchBar({ sortBy, toggleSort, handleFilter }) {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={(e) => {
            toggleSort(e.target.value)
          }}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={(e) => {
            toggleSort(e.target.value)
          }}
        />
        Price
      </label>
      <label>
        <input
          type="radio"
          value="Original"
          name="sort"
          checked={sortBy === "Original"}
          onChange={(e) => {
            toggleSort(e.target.value)
          }}
        />
        Original
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
