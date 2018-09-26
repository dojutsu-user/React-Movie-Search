import React, { Component } from "react";
import cssClass from "./MoviePage.css";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";

class MoviePage extends Component {
  state = {
    movieDetails: null
  };

  componentDidMount() {
    AxiosInstance.get(
      `/movie/${this.props.match.params.name}?api_key=${API_KEY}`
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        alert(error);
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <React.Fragment>
        <div class={cssClass.container}>
          <img
            class={cssClass.imgA1}
            src="https://image.tmdb.org/t/p/original/s4SmtlX13p1E2laSQqmVZQ8sYbe.jpg"
          />
          <img
						class={cssClass.imgB1}
						src="http://image.tmdb.org/t/p/w185/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg"
          />
        </div>

        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}

export default MoviePage;
