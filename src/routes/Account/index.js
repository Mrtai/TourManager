import React from "react";
import {Route, Switch} from "react-router-dom";
import asyncComponent from "utils/asyncComponent";
import UnauthorizedRoute from 'base/helper/UnauthorizedRoute';
import AuthorizedRoute from 'base/helper/AuthorizedRoute';

const Account = ({match}) => (
  <Switch>
    <UnauthorizedRoute path={`${match.url}/signin`} component={asyncComponent(() => import("./SignIn"))}/>
    <UnauthorizedRoute path={`${match.url}/signup`} component={asyncComponent(() => import("./SignUp"))}/>
    <AuthorizedRoute path={`${match.url}/`} component={asyncComponent(() => import("./Info"))} />
  </Switch>
);

export default Account;
