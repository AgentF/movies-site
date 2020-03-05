/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

function index({ total_pages, page, isLoading, setPage }) {
  return (
    <NavigationBar
      total_pages={total_pages}
      page={page}
      isLoading={isLoading}
      setPage={setPage}
    />
  );
}

export default index;

index.propTypes = {
  total_pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
};
