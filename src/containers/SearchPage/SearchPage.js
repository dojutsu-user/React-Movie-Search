import React, { Component } from "react";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";
import { Link } from "react-router-dom";
import cssClass from "./SearchPage.css";
import Card from "../../components/UI/Card/Card";

class SearchPage extends Component {
  state = {
    language: "en-US",
    currentPage: 1,
    results: []
  };

  getResults = query => {
    AxiosInstance.get(
      `/search/movie?api_key=${API_KEY}&language=${this.state.language}&page=${
        this.state.currentPage
      }&include_adult=false&query=${query}`
    ).then(response => {
      const results = response.data.results;
      this.setState({ results: results });
    });
  };

  componentDidMount() {
    this.getResults(decodeURIComponent(this.props.location.search.slice(7)));
  }

  componentDidUpdate() {
    this.getResults(decodeURIComponent(this.props.location.search.slice(7)));
  }

  render() {
    const results = this.state.results.map(movie => (
      <Link to={"/movie/" + movie.id} key={movie.id}>
        <div className={cssClass.block}>
          <Card
            name={movie.original_title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            originalLanguage={movie.original_language}
          />
        </div>
      </Link>
    ));
    return (
      <div>
        <h2 className={cssClass.title}>
          Results For {decodeURIComponent(this.props.location.search.slice(7))}
        </h2>
        <div className={cssClass.container}>
          {this.state.results ? results : null}
        </div>
      </div>
    );
  }
}

export default SearchPage;
