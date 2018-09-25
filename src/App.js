import React, { Component } from 'react';
import Main from "./containers/Main/Main";
import {withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
