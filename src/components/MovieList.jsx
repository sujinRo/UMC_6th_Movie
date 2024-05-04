import React from 'react';
import '../styles/movieList.css';

export default function Movie({ movieImage, title, star, overview }) {
  return (
    <div className="movie_box">
      <div className="explain_box">
        <div className="explain_title">{title}</div>
        <div className="explain_position">
          <div className="explain">{overview}</div>
        </div>
      </div>
      <img src={movieImage} alt={title} className="movie_image" />
      <div className="movie_text">
        <div className="title">{title}</div>
        <div className="star">{star}</div>
      </div>
    </div>
  );
}
