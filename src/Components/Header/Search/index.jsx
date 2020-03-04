import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

function index({ searchQuery, setSearchQuery }) {
  return <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;
}

export default index;

index.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
