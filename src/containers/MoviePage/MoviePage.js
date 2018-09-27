import React, { Component } from "react";
import cssClass from "./MoviePage.css";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";
import IMDbLogo from "../../assets/images/IMDbLogo.png";
import Spinner from "../../components/UI/Spinner/Spinner";

class MoviePage extends Component {
  state = {
    movieDetails: null
  };

  componentDidMount() {
    AxiosInstance.get(
      `/movie/${this.props.match.params.name}?api_key=${API_KEY}`
    )
      .then(response => {
        this.setState({ movieDetails: response.data });
      })
      .catch(error => {
        alert(error);
        this.props.history.push("/");
      });
  }

  render() {
    let genres = null;
    let details = <Spinner />;
    if (this.state.movieDetails) {
      genres = this.state.movieDetails.genres.map((genre, index) => (
        <span className={cssClass.Genre} key={index}>
          {genre.name}
        </span>
      ));
      details = (
        <React.Fragment>
          <div className={cssClass.Wrapper}>
            <div className={cssClass.one}>
              <img
                alt="Movie Poster"
                src={
                  "http://image.tmdb.org/t/p/w300" +
                  this.state.movieDetails.poster_path
                }
              />
            </div>
            <div className={cssClass.MovieDetail}>
              <h1 className={cssClass.MovieTitle}>
                {this.state.movieDetails.original_title}
              </h1>
              <p className={cssClass.Tagline}>
                {this.state.movieDetails.tagline}
              </p>
              <div className={cssClass.GenreSection}>{genres.slice(0, 4)}</div>
              <div className={cssClass.ReleaseDate}>
                <strong>Release Date:</strong>{" "}
                {new Date(this.state.movieDetails.release_date).toDateString()}
              </div>
              <div>
                <a
                  href={`https://www.imdb.com/title/${
                    this.state.movieDetails.imdb_id
                  }/`}
                >
                  <img
                    alt="IMDb"
                    className={cssClass.IMDbLogo}
                    src={IMDbLogo}
                  />
                </a>
              </div>
              <div className={cssClass.OverView}>
                <p>{this.state.movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return details;
  }
}

export default MoviePage;
