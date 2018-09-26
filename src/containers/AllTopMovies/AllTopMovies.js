import React, { Component } from "react";
import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroller";
import { API_KEY } from "../../API_KEY";
import cssClass from "./AllTopMovies.css";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

class AllTopMovies extends Component {
  state = {
    language: "en-US",
    results: [],
    currentPage: 0,
    totalPages: 0,
    hasMore: true,
    loading: true,
    totalResults: 0
  };

  getResults = () => {
    AxiosInstance.get(
      `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=${
        this.state.language
      }&page=${this.state.currentPage + 1}&include_adult=false`
    )
      .then(response => {
        this.setState({
          results: this.state.results.concat(response.data.results),
          currentPage: response.data.page,
          totalPages: response.data.totalPages,
          loading: false,
          totalResults: response.data.total_results
        });
        if (this.state.totalPages === this.state.currentPage) {
          this.setState({ hasMore: false });
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    let results = null;
    if (this.state.results.length > 0) {
      results = this.state.results.map((movie, index) => (
        <Link to={"/movie/" + movie.id} key={index}>
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
      results = <div className={cssClass.container}>{results}</div>;
    } else {
      if (this.state.loading) {
        results = <Spinner />;
      }
    }
    return (
      <div>
        <h2 className={cssClass.title}>
          Top Movies (Total: {this.state.totalResults})
        </h2>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.getResults}
          hasMore={this.state.hasMore}
          children={"random"}
        >
          {results}
        </InfiniteScroll>
      </div>
    );
  }
}

export default AllTopMovies;
