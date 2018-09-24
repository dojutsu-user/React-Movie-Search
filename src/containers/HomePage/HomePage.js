import React, { Component } from "react";
import Coverflow from "../../components/UI/Coverflow/Coverflow";
import TopMovies from "../../components/TopMovies/TopMovies";
import HR from "../../components/UI/HR/HR";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";

class HomePage extends Component {
  state = {
    moviePosters: [],
    movieLabels: [],
    topMovies: []
  };

  getCurrentDate = () => {
    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() +
      1}-${currentDate.getDate()}`;
    return currentDate;
  };

  getUpcomingMovies = () => {
    const currentDate = this.getCurrentDate();
    AxiosInstance.get(
      `/discover/movie?primary_release_date.gte=${currentDate}&api_key=${API_KEY}`
    )
      .then(response => {
        const posters = [];
        const movieLabels = [];
        const results = response.data.results;
        let count = 0;
        for (let i = 0; i < 15; ++i) {
          posters.push(results[i].poster_path);
          movieLabels.push(results[i].original_title);
          count = count + 1;
        }
        this.setState({ movieLabels: movieLabels, moviePosters: posters });
      })
      .catch(error => {
        alert(
          `${error.response.data.status_message}\nStatus Code: ${
            error.response.data.status_code
          }`
        );
      });
  };

  getTopMoviesOfTheYear = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentDate = this.getCurrentDate();
    AxiosInstance.get(
      `/discover/movie?primary_release_year=${currentYear}&primary_release_date.lte=${currentDate}&sort_by=popularity.desc&api_key=${API_KEY}`
    )
      .then(response => this.setState({ topMovies: response.data.results }))
      .catch(error => {
        alert(
          `${error.response.data.status_message}\nStatus Code: ${
            error.response.data.status_code
          }`
        );
      });
  };

  componentDidMount() {
    this.getUpcomingMovies();
    this.getTopMoviesOfTheYear();
  }

  render() {
    return (
      <React.Fragment>
        <Coverflow
          posters={this.state.moviePosters}
          labels={this.state.movieLabels}
        />
        <HR />
        <TopMovies topMovies={this.state.topMovies} />
        <HR />
      </React.Fragment>
    );
  }
}

export default HomePage;
