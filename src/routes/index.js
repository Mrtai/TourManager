import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "./Account";
import News from "./News";
import Tours from './eCommerce/Tours';
import Booking from './eCommerce/Booking';
import ResetPassword from './Account/ResetPassword';
import Seller from './eCommerce/Seller';
import asyncComponent from "utils/asyncComponent";
import AuthorizedRoute from 'base/helper/AuthorizedRoute';

const App = ({ match }) => {
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route exact path={`${match.url}`} component={asyncComponent(() => import("./eCommerce/Home"))} />
        <Route path={`${match.url}product`} component={asyncComponent(() => import("./eCommerce/Tours"))} />
        <Route path={`${match.url}booking`} component={asyncComponent(() => import("./eCommerce/Booking"))} />
        <Route path={`${match.url}cart`} component={asyncComponent(() => import("./eCommerce/Cart"))} />
      </Switch>
    </div>
  );
}

export default App;
