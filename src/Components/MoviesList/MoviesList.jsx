/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview';
import './MoviesList.css';

function MoviesList({ data: { results }, search, setSearch, isLoading }) {
  return (
    <ul className="movies-list">
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {results.map(movieInfo => (
            <MoviePreview
              key={movieInfo.id}
              movieInfo={movieInfo}
              search={search}
              setSearch={setSearch}
            />
          ))}
        </>
      )}
    </ul>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        video: PropTypes.bool.isRequired,
        vote_count: PropTypes.number.isRequired,
        vote_average: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        original_language: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
        backdrop_path: PropTypes.string.isRequired,
        adult: PropTypes.bool.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        media_type: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
