import React from "react";

function FilterDropDown({ handleFilterChange }) {
  const options = ["Technology", "Sportswear", "Finance"];

  return (
    <div>
      <select className='dropdown-filter' onChange={handleFilterChange}>
        <option value=''>Select type</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function SearchBar({
  sortBy,
  onChangeSort,
  filterBy,
  onChangeFilter,
  searchTerm,
  onChangeSearch,
}) {
  // Handler for when the sort option changes
  function handleSortChange(event) {
    onChangeSort(event.target.value);
  }

  // Handler for when the filter option changes
  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  // Handler for when the search term changes
  function handleSearchTermChange(term) {
    // console.log(event.target.value);
    onChangeSearch(term);
  }

  return (
    <div className='container-filter'>
      <input
        placeholder='search stocks'
        className='search-bar'
        type='text'
        value={searchTerm}
        onChange={(event) => handleSearchTermChange(event.target.value)}
      />
      {/* Sort options */}
      <div className='container-sort'>
        <strong>Sort by:</strong>
        <div>
          <label className='sort-label'>
            <input
              type='radio'
              value='Alphabetically'
              name='sort'
              checked={sortBy === "Alphabetically"}
              onChange={handleSortChange}
            />
            Alphabetically
          </label>
        </div>
        <div>
          <label className='sort-label'>
            <input
              type='radio'
              value='Price'
              name='sort'
              checked={sortBy === "Price"}
              onChange={handleSortChange}
            />
            Price
          </label>
        </div>
        {/* Filter options */}
      </div>

      <FilterDropDown handleFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchBar;
