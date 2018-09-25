import React, { Component } from "react";
import cssClass from "./SearchBox.css";
import Button from "../../components/UI/Button/Button";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  state = {
    searchString: ""
  };

  inputChangeHandler = event => {
    this.setState({ searchString: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const queryString = "?query=" + encodeURIComponent(this.state.searchString);
    return this.props.history.push({
      pathname: "/search",
      search: queryString
    })
  };

  render() {
    return (
      <div className={cssClass.SearchBox}>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.inputChangeHandler}
            type="text"
            className={cssClass.textInput}
            placeholder="Search..."
            value={this.state.searchString}
          />
          <Button type="submit">
          <span className={cssClass.ButtonText}><i className="fa fa-search"> </i> Search</span>
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);
