import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
//import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer'
import Introduction from './components/Introduction/Introduction'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import mapExploration from './components/Map/vis'
import TestData from './components/testcors2'
import Disclaimer from './components/Disclaimer';
import Compare from './components/Compare/CompareNew'

import SearchResult from './components/Compare/SearchResult'


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (

      <Router>
      {/* <CustomNavbar /> */}
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <Route exact path='/' component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/mapExploration" component={mapExploration} />
        <Route path="/test" component={TestData} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/compare" component={Compare} />
        <Route path="/searchResult" component={SearchResult} />
      <Footer />
    </Router>
    );
  }
}

export default App;
