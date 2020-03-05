/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './MoviePreview.css';

// const screenTime = runtime => {
//   const hours = Math.floor(runtime / 60);
//   const mins = Math.floor(runtime % 60);
//   const zeroPadding = int => (int < 10 ? `0${int}` : int);
//   return `${zeroPadding(hours)}:${zeroPadding(mins)}:00`;
// };

function MoviePreview({
  movieInfo: { id, vote_average, title, overview, poster_path },
}) {
  return (
    <li className="movie-preview" key={id}>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={`${title}'s Poster`}
      />
      <div className="movie-detail-hidden">
        {overview && <span className="movie-synopsis">{overview}</span>}
        <div className="movie-details-footer">
          {vote_average && <span className="movie-rating">{vote_average}</span>}
        </div>
      </div>
      <h3 className="movie-title" title={title}>
        {title}
      </h3>
    </li>
  );
}

export default MoviePreview;

MoviePreview.propTypes = {
  movieInfo: PropTypes.shape({
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
  }).isRequired,
};
