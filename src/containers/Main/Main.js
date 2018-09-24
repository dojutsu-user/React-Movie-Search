import React, { Component } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import Sidebar from "../../components/UI/Navbar/Sidebar/Sidebar";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Homepage from "../HomePage/HomePage";

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
        <Homepage />
      </React.Fragment>
    );
  }
}

export default Main;
