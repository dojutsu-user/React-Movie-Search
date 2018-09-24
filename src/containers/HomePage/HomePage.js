import React, { Component } from "react";
import Coverflow from "../../components/UI/Coverflow/Coverflow";
import TopMovies from "../../containers/TopMovies/TopMovies";
import HR from "../../components/UI/HR/HR";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";

class HomePage extends Component {
  state = {
    moviePosters: [],
    movieLabels: []
  };

  getUpcomingMovies = () => {
    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() +
      1}-${currentDate.getDate()}`;
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
        console.log(error.response.data.status_message);
        alert(
          `${error.response.data.status_message}\nStatus Code: ${
            error.response.data.status_code
          }`
        );
      });
  };

  componentDidMount() {
    this.getUpcomingMovies();
  }

  render() {
    return (
      <React.Fragment>
        <Coverflow
          posters={this.state.moviePosters}
          labels={this.state.movieLabels}
        />
        <HR />
        <TopMovies />
        <HR />
      </React.Fragment>
    );
  }
}

export default HomePage;
