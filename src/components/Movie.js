import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres, rating },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li className="movie__genre" key={index}>
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
};

export default Movie;
