import React from "react";
import cssClass from "./TopMovies.css";
import Card from "../UI/Card/Card";

const topMovies = props => {
  const movieCards = props.topMovies.map(movie => (
    <div key={movie.id} className={cssClass.block}>
      <Card
        name={movie.original_title}
        overview={movie.overview}
        posterPath={movie.poster_path}
        releaseDate={movie.release_date}
        originalLanguage={movie.original_language}
      />
    </div>
  ));
  return (
    <div>
      <h2 className={cssClass.title}>Top Movies</h2>
      <div className={cssClass.container}>
        {props.topMovies ? movieCards : null}
      </div>
    </div>
  );
};

export default topMovies;
