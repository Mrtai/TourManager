import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Redirect, Switch } from 'react-router-dom';

import Slide from './components/slide/slide';

import Tips from './components/tips';
import Footer from './components/footer';

import routes from './routes';

import Menu from './components/Menu';
import DetailTour from './components/tour/detailTour';
import Login from './components/login/login';

export default class App extends Component {
  render() {
    var elmRoutes = routes.map((route, index) => {
      return(
      <Route key={index} path={route.path} component={route.main} exact={route.exact} />
      )
    })
    return (
      <Router>
        <Login />
        <div className="App">
          <Slide />
          {/*viet router ===========================================*/}
          <Menu />
          <Switch>
            
            {elmRoutes}
            
          </Switch>
          {/*viet router ===========================================*/}
          <Tips />
          <Footer />
        </div>
      </Router>
    );
  }

}
