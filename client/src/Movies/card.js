import React from "react";

function Card({ movie }) {
  return (
    <div className="movie_card" onClick={() => {}}>
      <img src={movie.posterImage} alt={movie.title} />
      <p className="movie_name">{movie.title}</p>
      <p className="movie_year">{movie.publishingYear}</p>
    </div>
  );
}

export default Card;
