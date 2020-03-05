/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import Search from './Search';
import './Header.css';

function Header({ isLoading, page, total_pages, setPage, setSearch, search }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      if (searchQuery.length > 1 && searchQuery.length % 2 === 0) {
        // Temporal fix.
        setSearch({ ...search, query_term: searchQuery });
      }
    } else {
      setSearch('');
    }
  }, [searchQuery]);

  return (
    <div className="header">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="header-title-wrapper">
        <i className="material-icons md-48 header-title-icon">movie_creation</i>
        <h1 className="principal-title">Movies</h1>
      </div>
      <NavigationBar
        page={page}
        total_pages={total_pages}
        isLoading={isLoading}
        setPage={setPage}
      />
    </div>
  );
}

export default Header;

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
