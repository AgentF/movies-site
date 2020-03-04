import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={({ target: { value } }) => {
          return setSearchQuery(typeof value === 'string' ? value : '');
        }}
      />
    </div>
  );
}

export default Search;

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
