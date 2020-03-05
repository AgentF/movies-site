/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function index({ isLoading, page, total_pages, setPage, setSearch, search }) {
  return (
    <Header
      isLoading={isLoading}
      page={page}
      total_pages={total_pages}
      setPage={setPage}
      setSearch={setSearch}
      search={search}
    />
  );
}

export default index;

index.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
