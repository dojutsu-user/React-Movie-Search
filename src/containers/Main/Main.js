import React, { Component } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import Sidebar from "../../components/UI/Navbar/Sidebar/Sidebar";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Homepage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import {Switch, Route} from "react-router-dom";
import MoviePage from "../MoviePage/MoviePage";
import {withRouter} from "react-router-dom"
import SearchPage from "../SearchPage/SearchPage";

class Main extends Component {
  state = {
    isSidebarOpen: false
  };

  toggleSidebarHandler = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar sidebarToggler={this.toggleSidebarHandler} />
        <Sidebar open={this.state.isSidebarOpen} />
        <Backdrop
          open={this.state.isSidebarOpen}
          clicked={this.toggleSidebarHandler}
        />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/movie/:name" component={MoviePage} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
