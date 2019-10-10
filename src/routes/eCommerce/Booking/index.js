import React from "react";
import {Route, Switch} from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const Index = ({match}) => {
  return(
  <Switch>
    <Route path={`${match.url}/tour/:id`} component={asyncComponent(() => import("./book"))}/>
  </Switch>
)};

export default Index;