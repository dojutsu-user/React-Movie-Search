import React, { Component } from "react";
import AxiosInstance from "../../AxiosInstance";
import { API_KEY } from "../../API_KEY";
import { Link } from "react-router-dom";
import cssClass from "./SearchPage.css";
import Card from "../../components/UI/Card/Card";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../../components/UI/Spinner/Spinner";

class SearchPage extends Component {
  state = {
		query: '',
    language: "en-US",
    results: [],
    currentPage: 0,
    totalPages: 0,
		hasMore: true,
		loading: true
  };

  getResults = () => {
    AxiosInstance.get(
			`/search/movie?api_key=${API_KEY}&language=${this.state.language}&page=${this.state.currentPage +1}&include_adult=false&query=${decodeURIComponent(this.props.location.search.slice(7))}`)
			.then(response => {
				this.setState({
					query: decodeURIComponent(this.props.location.search.slice(7)),
					results: this.state.results.concat(response.data.results),
					currentPage: response.data.page,
					totalPages: response.data.totalPages,
					loading: false
				});
				if (this.state.totalPages === this.state.currentPage) {
					this.setState({ hasMore: false });
				}
			})
			.catch(error => {
				alert(error)
			})
	};
	
	static getDerivedStateFromProps(nextProps, prevState) {
		if(decodeURIComponent(nextProps.location.search.slice(7)) !== prevState.query) {
			return {
				language: "en-US",
				results: [],
				currentPage: 0,
				totalPages: 0,
				hasMore: true,
				loading: true
			}
		} else {
			return null
		}
	}

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
				results = <Spinner />
			}
		}
    return (
      <div>
        <h2 className={cssClass.title}>
          Results For "{decodeURIComponent(this.props.location.search.slice(7))}
          " (Total: {this.state.results.length})
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

export default SearchPage;
