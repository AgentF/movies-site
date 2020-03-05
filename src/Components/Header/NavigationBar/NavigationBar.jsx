/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css';

function NavigationBar({ total_pages, page, isLoading, setPage }) {
  return (
    <div className="nav-bar">
      <button
        className="nav-button"
        type="button"
        onClick={() => setPage(1)}
        disabled={isLoading || page === 1}
      >
        first
      </button>
      <button
        className="nav-button"
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={isLoading || page < 2}
      >
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
      <div className="current-page">
        page
        {page}
      </div>
      <button
        className="nav-button"
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={isLoading || page >= total_pages}
      >
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
      <button
        className="nav-button"
        type="button"
        onClick={() => setPage(total_pages)}
        disabled={isLoading || page >= total_pages}
      >
        last
      </button>
    </div>
  );
}

export default NavigationBar;

NavigationBar.propTypes = {
  total_pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
};
